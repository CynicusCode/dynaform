import React from "react";
import styles from "./SignIn.module.css";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { FloatingLabelWithIcon } from "@/components/ui/FloatingLabelWithIcon";
<div class="m-0 flex h-screen items-center justify-center m-0">
    <div class="h-4/5 bg-blue-500 shadow-xl w-[44%] max-w-lg m-0"></div>
    <div class="h-[73%] -translate-x-14 bg-red-500 shadow-sm w-[30%] max-w-sm m-0 relative"> 
      <div class="mt-[-8]"> <!- Adjust '[-8]' to your height ->
        <div class="absolute w-64 h-8 bg-gradient-to-br from-blue-500 to-pink-500 -skew-y-12 z-index:-1"></div> 
        <div class="absolute w-60 h-8 bg-gradient-to-br from-blue-500 to-pink-500 -skew-y-12 m-0 opacity-55 z-index:-1"></div>
      </div>  
    </div>
</div>


const SignIn: React.FC = () => {
	return (
		<main
			className="h-screen flex justify-center items-center bg-background-grey p-8 relative"
			style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
		>
			{/* Red rectangle */}
			<section
				className="bg-white w-1/2 rounded-lg shadow-xl p-20 max-w-4xl mx-auto"
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
				className="bg-blue-950 absolute rounded-lg shadow-xl max-w-4l mx-auto"
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
