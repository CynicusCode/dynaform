import React from "react";

const signIn: React.FC = () => {
	// Your JSX goes here
	return (
		<main className="flex min-h-screen bg-background-grey">
			<header>
				Logo goes here
				{/* Replace with your actual Logo component */}
				{/* <Logo/> */}
			</header>
			<section className="login-form">
				<div className="bg-white">Form goes here</div>
			</section>
			<aside>
				<div>Dashboard component goes here</div>
			</aside>
		</main>
	);
};

export default signIn;
