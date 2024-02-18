import React from "react";

const SignIn: React.FC = () => {
	return (
		<main className="h-screen grid grid-cols-10 grid-rows-10 bg-background-grey">
			{/* Empty divs for top padding (if still needed) */}
			<div className="col-span-10 row-span-2"></div>

			{/* Login Section - Centered in 5/10 columns, 8/10 row height */}
			<section className="col-start-3 col-span-5 row-start-2 row-span-8 bg-white flex flex-col justify-center">
				{/* Centered header */}
				<header className="self-center">
					{/* Logo component goes here */}
				</header>

				<div className="w-full">
					{/* Your form goes here */}
					<form>{/* Form elements */}</form>
				</div>
			</section>

			{/* Blue Rectangle - Placed on the right, overlapping */}
			<div className="col-start-7 col-span-3 row-start-3 row-span-6 bg-blue-500"></div>
		</main>
	);
};

export default SignIn;
