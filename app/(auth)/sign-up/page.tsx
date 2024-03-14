//SignUPPage.tsx
import React from "react";
import Image from "next/legacy/image";
import SignUpForm from "@/components/SignUpForm";
import SignUpNotice from "@/components/SignUpNotice";
import SignInForm from "@/components/SignInform";

const SignInPage: React.FC = () => {
	return (
		<main className="flex justify-center items-center h-screen">
			<div className="relative max-w-screen-2xl w-full h-full flex justify-center items-center bg-stone-50">
				{/* Adjusted container for responsive positioning and doubling size of the Image component at SM breakpoint */}
				<div className="absolute z-50 rounded-xl top-32 overflow-hidden left-1/2 -translate-x-1/2 w-[200px] h-[100px] md:left-[33%]">
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
				<section className="h-[70%] w-[95%] bg-white shadow-2xl relative rounded-xl max-w-xl">
					<div className="items-center justify-center flex-col flex mt-32 ml-12 mr-28">
						<SignUpForm />
					</div>
				</section>

				{/* Adjusted positioning for the blue section */}
				<section className="hidden sm:flex h-[70%] md:-translate-x-14 bg-blue-900 w-[35%] -m-6 z-10 relative justify-center items-center rounded-xl max-w-lg shadow-xl">
					<SignUpNotice />
				</section>
			</div>
		</main>
	);
};

export default SignInPage;
