import csrf from "edge-csrf";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * - すべてのパスにヒットする
 * - 動作確認の例
 *
 * ```
 * const regex = new RegExp("/((?!api|_next/static|_next/image|favicon.ico).*)");
 * regex.test('testing_path');
 * ```
 */
export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
  // matcher: "/api/(.*)",
};

// initalize protection function
const csrfProtect = csrf({
  // cookie: {
  //   secure: process.env.NODE_ENV === "production",
  // },
});

export async function middleware(request: NextRequest) {
  request.headers.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  const response = NextResponse.next();

  // csrf protection
  const csrfError = await csrfProtect(request, response);

  // check result
  if (csrfError) {
    return NextResponse.json(
      { message: "invalid csrf token" },
      { status: 403 }
    );
  }

  return response;
}
