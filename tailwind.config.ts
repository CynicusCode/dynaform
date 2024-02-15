import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		// Include "./src/**/*.{js,ts,jsx,tsx,mdx}" if your project structure has a src directory
	],
	theme: {
		extend: {
			fontFamily: {
				sans: "var(--font-poppins), sans-serif", // Use the CSS variable for Poppins
			},
		},
	},
	plugins: [],
};

export default config;
