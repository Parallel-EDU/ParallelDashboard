import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value;
  const publicPaths = [
    "/login",
    "/onboarding",
    "/trainer/login",
    // "/trainer/assignments",
    "/trainer/onboarding",
    "/signup",
    "/reset-password",
    "/forgot-password",
    "/admin/login",
    "/api/admin/login",
    "/api/admin/logout",
    "/api/users/login/route",
  ];

  if (
    publicPaths.includes(url.pathname) ||
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/images") ||
    url.pathname.startsWith("/api/")
  ) {
    return NextResponse.next();
  }
  if (!token) {
    if (url.pathname.startsWith("/admin") && url.pathname != "/admin/login") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    } else if (
      url.pathname.startsWith("/trainer") &&
      url.pathname != "/trainer/login"
    ) {
      return NextResponse.redirect(new URL("/trainer/login", req.url));
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    const { platform } = payload;
    const { pathname } = url;
    if (publicPaths.includes(url.pathname)) {
      const redirectUrl = url.pathname;
      console.log(redirectUrl)
      return NextResponse.redirect(new URL(redirectUrl, req.url));
    }
    if (pathname.startsWith("/admin") && platform !== "admin") {
      console.log("Invalid platform for admin route, redirecting");
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    if (pathname.startsWith("/trainer") && platform !== "trainer") {
      console.log("Invalid platform for trainer route, redirecting");
      return NextResponse.redirect(new URL("/trainer/login", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware Error:", error);
    if (url.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    } else if (url.pathname.startsWith("/trainer")) {
      return NextResponse.redirect(new URL("/trainer/login", req.url));
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
