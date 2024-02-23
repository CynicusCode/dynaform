import React from "react";
import { FloatingLabelWithIcon } from "@/components/ui/FloatingLabelWithIcon";

const TestPage = () => {
	return (
		<main className="m-0 flex h-screen items-center justify-center bg-stone-100 relative">
			<section
				className="min-h-[85%] md:min-h-[80%] w-[90%] md:w-[60%] lg:max-w-xl bg-white shadow-xl m-0 z-10 relative flex flex-col items-center justify-start pt-20 md:pt-10 md:ml-10 overflow-y-auto rounded-b-lg"
				style={{ direction: "rtl" }}
			>
				<div
					className="flex flex-col items-center w-full"
					style={{ direction: "ltr" }}
				>
					{/* Adjusted for demonstration: fewer FloatingLabelWithIcon components */}
					{[...Array(2)].map((_, index) => (
						<FloatingLabelWithIcon
							key={index}
							label={`Email ${index + 1}`}
							id={`emailInput${index}`}
							icon={
								<img
									src="/icons/icon_email.svg"
									alt="Email Icon"
									className="w-5 h-5"
								/>
							}
						/>
					))}
				</div>
			</section>

			<section className="hidden sm:flex md:w-[35%] md:max-w-md lg:max-w-lg h-[73%] md:-translate-x-10 bg-blue-900 shadow-sm m-0 z-10 relative justify-center items-center rounded-lg"></section>
		</main>
	);
};

export default TestPage;
