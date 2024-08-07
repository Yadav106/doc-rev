import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

// export const revalidate = 1;
export const dynamic = 'force-dynamic';

export async function GET(
    request: Request
) {
    try {
        const reviews = await prisma.review.findMany(
            {
                include: {
                    author: true,
                    replies: true
                }
            }
        )

        return NextResponse.json({"reviews" : reviews});
    } catch (error) {
        console.log("GET_REVIEW_ERROR")
        console.log(error)
        return new NextResponse('Internal server error', { status: 500 });
    }
}