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
			colors: {
				"background-grey": "#ECECEF", // Corrected color extension
			},
			fontFamily: {
				sans: ["var(--font-poppins)", "sans-serif"], // Ensured Poppins is in an array and removed the CSS variable
			},
		},
	},
	plugins: [],
};

export default config;
