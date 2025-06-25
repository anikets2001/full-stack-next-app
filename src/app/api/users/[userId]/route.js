import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const params = await context.params;
  console.log(params.userId);

  const userData = user.filter((user) => user.id === Number(params.userId));

  return NextResponse.json(userData.length === 0 ? "No User Found" : userData, {
    status: 200,
  });
}

export async function PUT(request, context) {
  const id = context.params.userId;
  const payload = await request.json();

  console.log(`Updating user ID ${id}`, payload);

  const existingUser = user.find((u) => u.id === parseInt(id));

  if (!existingUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ result: "User updated" }, { status: 200 });
}
