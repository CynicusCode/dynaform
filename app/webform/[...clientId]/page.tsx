import React from "react";
import Image from "next/legacy/image";

const SignInPage: React.FC = () => {
	return (
		<main className="bg-white relative flex justify-center items-center h-screen m-0">
			<div className="relative max-w-screen-2xl w-full h-full flex justify-center items-center bg-stone-50">
				{/* Adjusted container for responsive positioning and doubling size of the Image component at SM breakpoint */}
				<div className="absolute z-50 rounded-xl overflow-hidden top-10 left-1/2 transform -translate-x-1/2 sm:w-[200px] sm:h-[100px] md:mr-[27%] md:left-auto md:transform-none lg:top-4 lg:w-[200px] lg:h-[100px]">
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
				<section className="h-[90%] w-[95%] bg-white shadow-2xl m-0 relative flex flex-col items-center justify-center md:m-6 rounded-xl max-w-3xl "></section>

				{/* Adjusted positioning for the blue section */}
				<section className="hidden sm:flex h-[85%] md:-translate-x-14 bg-blue-900 w-[35%] -m-6 z-10 relative justify-center items-center rounded-xl max-w-lg shadow-xl">
					More content goes here
				</section>
			</div>
		</main>
	);
};

export default SignInPage;
