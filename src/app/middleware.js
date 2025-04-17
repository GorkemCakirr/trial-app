import {NextResponse} from "next/server";
const rewriteDomain = "https://trial-app-docs.vercel.app";

export async function middleware(request) {
  const {pathname, search} = request.nextUrl;
  console.log("pathname", pathname);
  if (pathname === "/docs") {
    return NextResponse.redirect(`https://trial-app-docs.vercel.app/docs`);
  }
}

export const config = {
  matcher: "/docs",
};
