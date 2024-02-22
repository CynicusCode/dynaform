import React from "react";
import styles from "./SignIn.module.css";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { FloatingLabelWithIcon } from "@/components/ui/FloatingLabelWithIcon";

const SignIn: React.FC = () => {
	return (
		<main className="m-0 flex h-screen items-center justify-center bg-slate-400 relative">
			{/* Background layer */}
			<div className="absolute top-0 w-[54%] max-w-7xl h-full bg-slate-200 z-0"></div>
			{/* Ensure the white box is in front of the background layer */}
			<section className="h-4/5 bg-white shadow-xl w-[44%] max-w-xl m-0 z-10 relative ml-14">
				<FloatingLabelWithIcon
					label="Email"
					id="emailInput"
					icon={
						<img
							src="/icons/icon_email.svg" // Assuming the SVG is located at public/icons/icon_email.svg
							alt="Email Icon"
							className="w-4 h-4"
						/>
					}
				/>
			</section>
			{/* Ensure the blue box also remains in front of the background layer */}
			<section className="hidden sm:flex h-[73%] -translate-x-14 bg-blue-900 shadow-sm w-[30%] max-w-sm m-0 z-10 relative justify-center items-center">
				<FloatingLabelInput
					label="Your Name"
					id="name"
					name="name"
					placeholder=" "
				/>
			</section>
		</main>
	);
};

export default SignIn;
