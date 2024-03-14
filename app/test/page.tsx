import React from "react";
import Image from "next/legacy/image";
import SignInForm from "@/components/SignInform";
import { Separator } from "@/components/ui/separator";
import SignUpForm from "@/components/SignUpForm";

const TestPage = () => {
	return (
		<div className="max-w-lg justify-center justify-items-center">
			<SignUpForm />
			<Separator />
		</div>
	);
};

export default TestPage;
