import prisma from "@/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  const hashedPassowrd = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassowrd,
      },
    });
    return NextResponse.json(user);
  } catch {
    return NextResponse.error();
  }
}
