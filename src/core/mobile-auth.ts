import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.NEXTAUTH_SECRET || "fallback-secret-key";
const TOKEN_EXPIRY = "30d"; // Mobile tokens last 30 days

export interface MobileTokenPayload {
    userId: string;
    email: string;
    role: string;
}

export function signMobileToken(payload: MobileTokenPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

export function verifyMobileToken(token: string): MobileTokenPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as MobileTokenPayload;
    } catch {
        return null;
    }
}

/**
 * Extracts and verifies the Bearer token from the request.
 * Returns the decoded payload or null if invalid/missing.
 */
export function authenticateMobileRequest(req: NextRequest): MobileTokenPayload | null {
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) return null;

    const token = authHeader.substring(7);
    return verifyMobileToken(token);
}

/**
 * Helper to return a 401 JSON response
 */
export function unauthorizedResponse() {
    return Response.json(
        { error: "Unauthorized. Provide a valid Bearer token." },
        { status: 401 }
    );
}
