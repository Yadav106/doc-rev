import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function GET(
    request: Request
) {
    const reviews = await prisma.review.findMany()

    return NextResponse.json({"reviews" : reviews});
}