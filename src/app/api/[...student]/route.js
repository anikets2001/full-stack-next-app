import { NextResponse } from "next/server";

export async function GET(context) {
  const studentDetails = context.params.student;
  return NextResponse.json({ result: studentDetails, status: 200 });
}
