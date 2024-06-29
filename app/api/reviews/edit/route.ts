import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(
    request: Request
) {
    try {
        const requestBody = await request.json();
        const { reviewId, title, body, rating } = requestBody;

        if (!reviewId || !title || !body || !rating) {
            return new NextResponse('Missing info', { status: 400 });
        }

        const updatedReview = await prisma.review.update({
            where: {
                id: reviewId
            },
            data: {
                title: title,
                body: body,
                rating: rating
            }
        })

        return NextResponse.json({updatedReview});
    } catch (error) {
        console.log("GET_REVIEW_ERROR")
        console.log(error)
        return new NextResponse('Internal server error', { status: 500 });
    }
}