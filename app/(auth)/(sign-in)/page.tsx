import React from "react";
import { FloatingLabelWithIcon } from "@/components/ui/FloatingLabelWithIcon";
import Image from "next/image";

const SignIn: React.FC = () => {
	return (
		<main className="m-0 flex h-screen items-center justify-center bg-stone-50 relative">
			<section className="h-[85%] w-[90%] bg-white shadow-xl m-0 z-10 relative flex flex-col items-center justify-center pt-20">
				{/* Adjusted responsive container for Image */}
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
				<div className="flex flex-col items-center w-full">
					<FloatingLabelWithIcon
						label="Email"
						id="emailInput"
						icon={
							<img
								src="/icons/icon_email.svg"
								alt="Email Icon"
								className="w-5 h-5"
							/>
						}
					/>
				</div>
			</section>
			<section className="hidden sm:flex h-[73%] -translate-x-14 bg-blue-900 shadow-sm w-[30%] max-w-sm m-0 z-10 relative justify-center items-center"></section>
		</main>
	);
};

export default SignIn;
