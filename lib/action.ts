"use server";

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies as nextCookies } from "next/headers";
import { post } from "./api-server";

const secretKey = process.env.AUTH_SECRET;
const alg = "HS256";
const sessionDurationSec = 60 * 60; // 1 saat
const key = new TextEncoder().encode(secretKey);

// JWT oluştur
export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime(`${sessionDurationSec}s`)
    .sign(key);
}

// JWT çöz
export async function decrypt(token: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(token, key, { algorithms: [alg] });
  return payload;
}

// Login işlemi
export async function login(email: string, password: string) {
  // API veya DB doğrulaması yerine örnek:
  const cookies = await nextCookies();
  await post("login", { email, password }).then(async (res) => {
    if (res) {
      const session = await encrypt({ email });
      const expires = new Date(Date.now() + 1000 * sessionDurationSec);
      cookies.set("session", session, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        expires,
      });
    }
  });
}

// Logout işlemi
export async function logout() {
  const cookies = await nextCookies();

  cookies.set("session", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
}

// Session verisini al
export async function getSession() {
  const cookies = await nextCookies();

  const token = cookies.get("session")?.value;
  if (!token) return null;

  try {
    const payload = await decrypt(token);
    return payload;
  } catch {
    return null;
  }
}

// Token süresini uzat (rolling session)
export async function updateSession() {
  const session = await getSession();
  if (!session) return;

  const newToken = await encrypt({ email: session.email });
  const expires = new Date(Date.now() + 1000 * sessionDurationSec);
  const cookies = await nextCookies();

  cookies.set("session", newToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    expires,
  });
}
