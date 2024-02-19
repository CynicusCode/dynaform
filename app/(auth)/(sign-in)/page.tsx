import React from "react";
import styles from "./SignIn.module.css";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { FloatingLabelWithIcon } from "@/components/ui/FloatingLabelWithIcon";

const SignIn: React.FC = () => {
	return (
		<main
			className="h-screen flex justify-center items-center bg-background-grey p-8 relative"
			style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
		>
			{/* Red rectangle */}
			<section
				className="bg-white w-1/2 rounded-lg shadow-xl p-20"
				style={{ height: "80vh", marginLeft: "20%", marginRight: "30%" }}
			>
				<FloatingLabelInput
					label="Your Name"
					id="name" // This should match the 'id' prop of the input for accessibility.
					name="name"
					placeholder=" " // Placeholder must be present for the floating label effect.
				/>
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
			{/* Dynamic Dashboard */}
			<section
				className="bg-blue-950 absolute rounded-lg shadow-xl"
				style={{
					height: "70vh",
					width: "30%",
					top: "15%",
					right: "5%",
				}}
			>
				<p className="text-white text-center">Dynamic Dashboard</p>
			</section>
		</main>
	);
};

export default SignIn;
