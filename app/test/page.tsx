import React from "react";
import Image from "next/legacy/image";
import SignInForm from "@/components/SignInform";
import { Separator } from "@/components/ui/separator";

const TestPage = () => {
	return (
		<div className="max-w-lg justify-center justify-items-center">
			Hello
			<Separator className="mx-1 h-1 bg-gray-200" />
			why have you forsaken me
		</div>
	);
};

export default TestPage;
