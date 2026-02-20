import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/core/prisma";

export async function POST(req: NextRequest) {
    try {
        const { platform, language } = await req.json();

        // Get IP from headers (CPanel/Proxies)
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ||
            req.headers.get("x-real-ip") ||
            "Unknown";

        const userAgent = req.headers.get("user-agent") || "Unknown";

        // Optional: Simple UA Parsing
        let device = "Desktop";
        if (/mobile/i.test(userAgent)) device = "Mobile";
        else if (/tablet/i.test(userAgent)) device = "Tablet";

        let browser = "Other";
        if (/chrome/i.test(userAgent)) browser = "Chrome";
        else if (/firefox/i.test(userAgent)) browser = "Firefox";
        else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) browser = "Safari";
        else if (/edge/i.test(userAgent)) browser = "Edge";

        // Try to get Geo location from IP via a free API (ip-api.com)
        let geoData = { city: null, country: null, lat: null, lon: null };
        try {
            if (ip !== "Unknown" && ip !== "127.0.0.1" && ip !== "::1") {
                const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
                const data = await geoRes.json();
                if (data.status === "success") {
                    geoData = {
                        city: data.city,
                        country: data.country,
                        lat: data.lat,
                        lon: data.lon
                    };
                }
            }
        } catch (e) {
            console.error("Geo lookup failed:", e);
        }

        // Save or update visitor record
        await prisma.visitor.upsert({
            where: { ip: ip },
            update: {
                lastVisit: new Date(),
                visitCount: { increment: 1 },
                userAgent,
                device,
                browser,
                city: geoData.city,
                country: geoData.country,
                latitude: geoData.lat,
                longitude: geoData.lon
            },
            create: {
                ip,
                userAgent,
                device,
                browser,
                city: geoData.city,
                country: geoData.country,
                latitude: geoData.lat,
                longitude: geoData.lon
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Visitor tracking error:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
