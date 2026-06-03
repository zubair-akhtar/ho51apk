import { NextResponse } from "next/server"

export async function GET() {
  const adsTxt = `google.com, pub-4318663211195032, DIRECT, f08c47fec0942fa0`

  return new NextResponse(adsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
