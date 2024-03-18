import React from "react";
import WebformSkeleton from "@/components/skeletons/WebformSkeleton";
import { InputWithLabel } from "@/components/ui/InputWithLabel";

const TestPage = () => {
	return (
		<div className="justify-center flex items-center mt-48 mr-16 ml-16">
			<InputWithLabel
				label="Name"
				id="name"
				placeholder="Enter your name"
				// Other props...
			/>
		</div>
	);
};

export default TestPage;
