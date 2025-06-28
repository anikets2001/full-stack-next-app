import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  const payload = await request.json();
  console.log("body:", payload);

  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Require field not found", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ result: "new user created" }, { status: 201 });
}
              


// export async function GET(request) {
//   return NextResponse.json([
//     { name: "Aniket", age: 24, location: "Gurgaon" },
//     { name: "Anik", age: 24, location: "Mathura" },
//   ], {status: 200});
// }

// This file runs on the server only
// export async function GET() {
//     const users = [
//       { id: 1, name: "Aniket Singh", email: "aniket@example.com" },
//       { id: 2, name: "Hemant Sharma", email: "hemant@example.com" },
//     ];

//     return Response.json(users);
//   }
