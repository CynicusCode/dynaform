import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	subsets: ["latin"], // Specify the subsets you need
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "A Dynamic webform with advanced validation features",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppinsFont.className}>{children}</body>
		</html>
	);
}
