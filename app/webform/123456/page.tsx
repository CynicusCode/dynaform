// folder-123456-page.tsx
import React from "react";
import MedicalWebform from "../components/MedicalWebform";
import Layout from "../Layout";

const DisplayBoard = () => {
	return (
		<div>
			{/* Add the content for the displayBoard */}
			<h2>Display Board</h2>
			<p>This is the content for the display board.</p>
		</div>
	);
};

const defaultMedical = () => {
	return (
		<Layout displayBoard={<DisplayBoard />}>
			<div className="mr-24 ml-24">
				<MedicalWebform />
			</div>
		</Layout>
	);
};

export default defaultMedical;
