import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const params = await context.params;
  console.log(params.userId);

  const userData = user.filter((user) => user.id === Number(params.userId));

//   const data = user;
  return NextResponse.json(userData.length === 0 ? "No User Found" : userData, {
    status: 200,
  });
}
