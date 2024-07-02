import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(
    request: Request
) {
    try {
        const body = await request.json();
        const { reviewId, replyBody } = body;

        if (!reviewId || !replyBody) {
            return new NextResponse('Missing info', { status: 400 });
        }

        await prisma.reply.create(
            {
                data: {
                    reviewId: reviewId,
                    body: replyBody
                }
            }
        )

        return NextResponse.json({"message": "Reply created successfully"});
    } catch (error) {
        console.log("GET_REVIEW_ERROR")
        console.log(error)
        return new NextResponse('Internal server error', { status: 500 });
    }
}