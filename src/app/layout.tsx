import type { Metadata } from "next";
import favicon from "@/assets/images/man-behind-computer-emoji.png";
import { Afacad, Bona_Nova } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Afacad({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["500"],
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
					inter.variable,
					bona_nova.variable,
					"bg-gray-950 text-white antialiased font-sans"
				)}
				style={{ overflow: "sm:hidden md:hidden lg:hidden" }}>
				{children}
			</body>
		</html>
	);
}
