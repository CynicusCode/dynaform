// Layout.tsx
import React from "react";
import Image from "next/image";

const Layout: React.FC<{
	displayBoard: React.ReactNode;
	children: React.ReactNode;
}> = ({ displayBoard, children }) => {
	return (
		<main className="flex justify-center items-center h-screen">
			<div className="relative max-w-screen-2xl w-full h-full flex justify-center items-center bg-stone-50">
				{/* Logo */}
				<div className="absolute z-50 rounded-xl top-4 overflow-hidden left-1/2 -translate-x-1/2 w-[200px] h-[100px] md:left-[33%]">
					<Image
						src="/logo/banner.png"
						alt="Banner"
						width={200}
						height={100}
						layout="responsive"
						objectFit="cover"
					/>
				</div>

				{/* Responsive margin applied to the section */}
				<section className="h-[90%] w-[95%] bg-white shadow-2xl m-0 relative md:m-6 rounded-xl max-w-xl">
					<div className="md:-ml-14 items-center justify-center flex-col flex mt-24">
						{/* Webform goes here */}
						{children}
					</div>
				</section>

				{/* Adjusted positioning for the blue section */}
				<section className="hidden sm:flex h-[75%] md:-translate-x-14 bg-blue-900 w-[35%] -m-6 z-10 relative justify-center items-center rounded-xl max-w-lg shadow-xl">
					{/* Display board goes here */}
					{displayBoard}
				</section>
			</div>
		</main>
	);
};

export default Layout;
