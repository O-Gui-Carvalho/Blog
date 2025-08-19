import prisma from "@/lib/prisma";
import { getCurrentUser, requireAdmin } from "@/utils/postAuth";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const user = await requireAdmin();

    const { title, category, image, content } = await request.json();

    const post = await prisma.post.create({
      data: {
        title,
        image,
        content,
        author: { connect: { id: user.id } },
        category: {
          connectOrCreate: {
            where: { name: category },
            create: { name: category },
          },
        },
      },
      include: {
        author: { select: { name: true, image: true } },
        category: { select: { name: true } },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    const status = error?.message === "Admin access required" ? 403 : 500;
    return NextResponse.json({ error: "Failed to create post" }, { status });
  }
}

export async function GET(){
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        category: true,
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}