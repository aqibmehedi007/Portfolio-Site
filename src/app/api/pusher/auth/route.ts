import { NextRequest } from "next/server";
import { authenticateMobileRequest, unauthorizedResponse } from "@/core/mobile-auth";
import { pusherServer } from "@/core/pusher";

export async function POST(req: NextRequest) {
    const auth = authenticateMobileRequest(req);
    // If it's a mobile request, we authenticate it through our JWT mobile-auth
    // Or it could be a web admin request which uses NextAuth. We'll support mobile auth here first
    if (!auth) {
        return unauthorizedResponse();
    }

    try {
        const text = await req.text();
        const params = new URLSearchParams(text);
        const socketId = params.get("socket_id");
        const channel = params.get("channel_name");

        if (!socketId || !channel) {
            return Response.json({ error: "Missing socket_id or channel_name" }, { status: 400 });
        }

        const authResponse = pusherServer.authorizeChannel(socketId, channel);
        return Response.json(authResponse);
    } catch (error) {
        console.error("Pusher auth error:", error);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
