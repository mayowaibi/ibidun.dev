import { openAsBlob } from "fs";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
			},
		},
		extend: {
			fontFamily: {
				sans: "var(--font-sans)",
				serif: "var(--font-serif)",
			},
			animation: {
				"ping-large": "ping-large 1s ease-in-out infinite",
				appear: "appear 1s ease-in-out",
			},
			keyframes: {
				"ping-large": {
					"75%, 100%": {
						transform: "scale(3)",
						opacity: "0",
					},
				},
				appear: {
					"0%": {
						opacity: "0",
						transform: "translateY(7rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
