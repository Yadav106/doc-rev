import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(
    request: Request
) {
    try {
        const body = await request.json();
        const { reviewId } = body;

        if (!reviewId) {
            return new NextResponse('Missing info', { status: 400 });
        }

        await prisma.review.delete(
            {
                where : {
                    id: reviewId
                }
            }
        )

        return NextResponse.json({"message": "Review deleted successfully"});
    } catch (error) {
        console.log("GET_REVIEW_ERROR")
        console.log(error)
        return new NextResponse('Internal server error', { status: 500 });
    }
}