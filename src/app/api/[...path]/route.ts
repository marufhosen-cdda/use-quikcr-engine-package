import { createProxyHandler } from "@quikcr/quik-engine";
import type { NextRequest } from "next/server";

// The proxy's upstream backend URL is owned by the package —
// `createProxyHandler` reads it from the internal QUIK_BACKEND_API_URL
// constant. Hosts do not need to configure or pass it.
const ENCRYPTION_KEY = process.env.PROXY_ENCRYPTION_KEY;

const proxy = createProxyHandler({
  encryptionKey: ENCRYPTION_KEY,
});

const handler = async (
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) => {
  const { path } = await params;
  return proxy(req, { path });
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
