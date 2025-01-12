import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Kanit, Bona_Nova } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const kanit = Kanit({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400"],
});
const bona_nova = Bona_Nova({
	subsets: ["latin"],
	variable: "--font-serif",
	weight: ["700"],
});

export const metadata: Metadata = {
	title: "Isaac Ibidun | Software Developer",
	description: "Personal Website for Oluwamayowa Isaac Ibidun",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={twMerge(
					kanit.variable,
					bona_nova.variable,
					"bg-gray-950 text-white antialiased font-sans overscroll-none"
				)}
				style={{ overflow: "sm:hidden md:hidden lg:hidden" }}>
				{children}
			</body>
		</html>
	);
}
