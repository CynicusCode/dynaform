import React from "react";
import styles from "./SignIn.module.css";

const SignIn: React.FC = () => {
	return (
		<main
			className="h-screen flex justify-center items-center bg-background-grey p-8 relative"
			style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
		>
			{/* Red rectangle */}
			<section
				className="bg-white w-1/2 rounded-lg shadow-xl"
				style={{ height: "80vh", marginLeft: "20%", marginRight: "30%" }}
			>
				<p className="text-white text-center">Sign In Form</p>
			</section>
			{/* Dynamic Dashboard */}
			<section
				className="bg-blue-950 absolute rounded-lg shadow-xl"
				style={{
					height: "70vh",
					width: "30%",
					top: "15%",
					right: "15%",
				}}
			>
				<p className="text-white text-center">Dynamic Dashboard</p>
			</section>
		</main>
	);
};

export default SignIn;
