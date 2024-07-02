import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(
    request: Request
) {
    try {
        const body = await request.json();
        const { replyId } = body;

        if (!replyId) {
            return new NextResponse('Missing info', { status: 400 });
        }

        await prisma.reply.delete(
            {
                where: {
                    id: replyId
                }
            }
        )

        return NextResponse.json({"message": "Reply deleted successfully"});
    } catch (error) {
        console.log("GET_REVIEW_ERROR")
        console.log(error)
        return new NextResponse('Internal server error', { status: 500 });
    }
}