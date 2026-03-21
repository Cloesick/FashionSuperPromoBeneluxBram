import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const host = request.headers.get("host") ?? "";
	const pathname = request.nextUrl.pathname;

	const configuredDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN;
	const wwwDomain = configuredDomain?.startsWith("www.")
		? configuredDomain
		: undefined;
	const apexDomain = wwwDomain ? wwwDomain.slice("www.".length) : undefined;

	if (apexDomain && host === apexDomain) {
		const url = request.nextUrl.clone();
		url.host = wwwDomain!;
		url.protocol = "https:";
		return NextResponse.redirect(url, 301);
	}

	if (pathname.startsWith("/admin")) {
		const user = process.env.ADMIN_USER;
		const pass = process.env.ADMIN_PASS;

		if (!user || !pass) {
			return new NextResponse("Not found", { status: 404 });
		}

		const auth = request.headers.get("authorization");
		const token = auth?.startsWith("Basic ")
			? auth.slice("Basic ".length)
			: null;

		let decoded = "";
		if (token) {
			try {
				decoded = atob(token);
			} catch {
				decoded = "";
			}
		}

		if (decoded !== `${user}:${pass}`) {
			return new NextResponse("Unauthorized", {
				status: 401,
				headers: {
					"WWW-Authenticate": 'Basic realm="Admin"',
				},
			});
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!_next|.*\\..*).*)"],
};
