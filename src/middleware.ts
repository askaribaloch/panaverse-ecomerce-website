import { authMiddleware } from "@clerk/nextjs";
//check repo code

export default authMiddleware({
  publicRoutes: ["/", "/male", "/kids", "/api/cart/:path*", "/api/webhooks/:path*", "/studio/:path*"],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/products", 
    "/category",
    "/api/cart/:path*",
    "/products/:path*,/studio/:path*",
    "/(api|trpc)(.*)",
  ],
};