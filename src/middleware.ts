import { NextRequest, NextResponse } from "next/server";
import { routes } from "./shared/constants";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const LoginURL = new URL(routes.login, request.url);
  const ChatbotURL = new URL(routes.chatbot, request.url);

  if (!token) {
    if (request.nextUrl.pathname === routes.home) {
      return NextResponse.next();
    }
    return NextResponse.redirect(LoginURL);
  }

  if (request.nextUrl.pathname === routes.home) {
    return NextResponse.redirect(ChatbotURL);
  }
}

export const config = {
  matcher: ["/", "/chatbot/:path*"],
};
