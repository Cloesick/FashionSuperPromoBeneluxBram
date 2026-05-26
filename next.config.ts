import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	distDir: ".next-fashion",
	basePath: "/fashion",
	async redirects() {
		return [
			{
				source: "/favicon.ico",
				destination: "/icon.webp",
				permanent: true,
			},
		];
	},
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

export default nextConfig;
