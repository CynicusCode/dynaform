import React from "react";
import Image from "next/image";

const TestPage = () => {
	return (
		<main className="m-0 flex h-screen items-center justify-center bg-stone-100 relative">
			{/* Black background container */}
			<div className="bg-black flex items-center justify-center h-screen max-w-7xl max-w-screen-2xl w-full">
				<section
					className="min-h-[85%] md:min-h-[80%] w-[90%] md:w-[60%] lg:max-w-2xl bg-white shadow-xl m-0 z-10 relative flex flex-col items-center justify-start pt-20 md:pt-10 md:ml-10 overflow-y-auto rounded-b-lg"
					style={{ direction: "rtl" }}
				>
					<div
						className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[50%] overflow-hidden rounded-sm shadow-sm w-full max-w-[180px] sm:max-w-[230px] md:max-w-[300px] lg:max-w-[300px] xl:max-w-[300px]"
						style={{ aspectRatio: "2 / 1" }}
					>
						<Image
							src="/logo/banner.png"
							alt="Banner"
							width={200}
							height={100}
							layout="responsive"
						/>
					</div>
					content goes here
				</section>
				<section className="hidden sm:flex md:w-[35%] md:max-w-md lg:max-w-lg h-[73%] md:-translate-x-10 bg-blue-900 shadow-sm m-0 z-10 relative justify-center items-center rounded-lg">
					content goes here2
				</section>
			</div>
		</main>
	);
};

export default TestPage;
