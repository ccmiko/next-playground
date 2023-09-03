import csrf from "edge-csrf";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

const csrfProtect = csrf({
  cookie: {
    secure: true,
  },
});

export async function middleware(request: NextRequest) {
  // request.headers.forEach((value, key) => {
  //   console.log(`${key}: ${value}`);
  // });
  const response = NextResponse.next();

  const csrfError = await csrfProtect(request, response);
  if (csrfError) {
    return NextResponse.json(
      { message: "invalid csrf token" },
      { status: 403 }
    );
  }

  return response;
}
