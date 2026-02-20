import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { prisma } from '@/core/prisma';

// Use env variables if present, fallback to provided defaults so it works out of the box
const SMTP_HOST = process.env.SMTP_HOST || 'mail.aqibmehedi.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_USER = process.env.SMTP_USER || 'mr@aqibmehedi.com';
const SMTP_PASS = process.env.SMTP_PASS || 'ACE@VICA.?9Tiv~V';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for other ports
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

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

        // Save lead to Database
        const lead = await prisma.lead.create({ data: result });

        // Email 1: Send notification to Admin (You)
        await transporter.sendMail({
            from: `"Portfolio Alerts" <${SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || SMTP_USER, // Send to yourself
            subject: `[New Lead] ${result.service} - ${result.name}`,
            text: `
Name: ${result.name}
Email: ${result.email}
Service: ${result.service}
Budget: ${result.budget}

Message:
${result.message}
            `,
            html: `
<h2>New Lead from Portfolio</h2>
<p><strong>Name:</strong> ${result.name}</p>
<p><strong>Email:</strong> ${result.email}</p>
<p><strong>Service:</strong> ${result.service}</p>
<p><strong>Budget:</strong> ${result.budget}</p>
<hr/>
<p><strong>Message:</strong></p>
<p>${result.message.replace(/\n/g, '<br/>')}</p>
            `
        });

        // Email 2: Send Auto-Reply to the Client
        await transporter.sendMail({
            from: `"Aqib Mehedi" <${SMTP_USER}>`,
            to: result.email,
            subject: `Thank you for reaching out: ${result.service}`,
            text: `Hi ${result.name},\n\nThank you for reaching out regarding ${result.service}. I have received your message and will review your specifications shortly. I typically respond within 24-48 business hours to arrange an initial consultation.\n\nBest regards,\nAqib Mehedi\nSenior AI & Mobile Solutions Architect`,
            html: `
<div style="font-family: sans-serif; line-height: 1.6; color: #333;">
    <p>Hi ${result.name},</p>
    <p>Thank you for reaching out regarding <strong>${result.service}</strong>.</p>
    <p>I have received your message and will review your specifications shortly. I typically respond within 24-48 business hours to arrange an initial consultation.</p>
    <br/>
    <p>Best regards,</p>
    <p><strong>Aqib Mehedi</strong><br/>Senior AI & Mobile Solutions Architect</p>
</div>
            `
        });

        return NextResponse.json({ success: true, message: "Message sent successfully" });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, errors: error.format() }, { status: 400 });
        }

        console.error("Contact API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
