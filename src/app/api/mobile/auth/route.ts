import { prisma } from "@/core/prisma";
import { signMobileToken } from "@/core/mobile-auth";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return Response.json({ error: "Email and password are required" }, { status: 400 });
        }

        const user = await prisma.adminUser.findUnique({ where: { email } });
        if (!user) {
            return Response.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return Response.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const token = signMobileToken({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        return Response.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Mobile auth error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
