import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

export async function POST(
    request: Request
) {
    try {
        const currentUser = await getCurrentUser();
        const requestBody = await request.json();

        const {
            title,
            body,
            rating
        } = requestBody

        if(!currentUser?.id || !currentUser?.email) {
            return new NextResponse(('Unauthorized'), { status: 401 });
        }

        if (!title || !body || !rating) {
            return new NextResponse(('Data missing'), { status: 400 });
        }

        const newReview = await prisma.review.create({
            data: {
                authorId: currentUser.id,
                authorImage: currentUser.image,
                title,
                body,
                rating,
                authorName: currentUser.name || "Name not available",
            },
            include: {
                author: true
            }
        })

        return NextResponse.json({"review": newReview})


    } catch (error) {
        console.log("REWIEW_CREATION_ERROR")
        console.log(error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}