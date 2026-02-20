import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { prisma } from '@/core/prisma';

// Initialize Resend
// We'll construct the key from your environment variable soon. 
// For now, it will fail gracefully if it's not set.
const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

const ContactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    service: z.string().min(1, "Please select an area of interest."),
    budget: z.string(),
    message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate that the request matches our Zod Schema
        const result = ContactSchema.parse(body);

        // Add database insertion logic here (Phase 2)
        const lead = await prisma.lead.create({ data: result });

        if (resend) {
            // Send the email to you
            await resend.emails.send({
                from: 'Portfolio Contact <onboarding@resend.dev>', // You will verify your own domain later
                to: process.env.CONTACT_EMAIL || 'me@example.com',
                subject: `New Lead: ${result.service} - ${result.name}`,
                text: `
Name: ${result.name}
Email: ${result.email}
Service: ${result.service}
Budget Range: ${result.budget}

Message:
${result.message}
        `,
            });

            // Send a confirmation email to the client
            await resend.emails.send({
                from: 'Aqib Mehedi <onboarding@resend.dev>', // You will verify your own domain later
                to: result.email,
                subject: `Received your inquiry: ${result.service}`,
                text: `Hi ${result.name},\n\nThank you for reaching out regarding ${result.service}. I have received your message and will review your specifications shortly. I typically respond within 24-48 business hours to arrange an initial consultation.\n\nBest regards,\nAqib Mehedi\nSenior AI & Mobile Solutions Architect`,
            });
        }

        return NextResponse.json({ success: true, message: "Message sent successfully" });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, errors: error.format() }, { status: 400 });
        }

        console.error("Contact API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
