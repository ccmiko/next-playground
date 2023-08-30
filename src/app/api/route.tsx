import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // get one querystring
  const { searchParams } = new URL(request.url);
  const param = searchParams.get("test") ?? "None";
  console.log(`param: ${JSON.stringify(param)}`);
  // get all querystring
  const params: { [key: string]: string | number } = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  console.log(`params: ${JSON.stringify(params)}`);
  return NextResponse.json({ youSetFirstQueryString: param, allQuery: params });
}

export async function POST(request: NextRequest) {
  // get body
  const body: { [key: string]: string | number } = await request.json();
  console.log(`body: ${JSON.stringify(body)}`);
  return NextResponse.json({ youSetBody: body });
}
