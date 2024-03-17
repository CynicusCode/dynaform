//SignInForm.tsx
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "../lib/supabaseClient";
import { FloatingLabelWithIcon } from "./ui/FloatingLabelWithIcon";
import emailIcon from "../public/icons/icon_email.svg";
import passwordIcon from "../public/icons/icon_password.svg";
import clientIcon from "../public/icons/icon_organization.svg";

import Image from "next/legacy/image";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// Define the schema
const signInSchema = z.object({
	clientId: z.string().min(1, "Client ID is required"),
	email: z.string().email("Invalid email format"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

const SignInForm = () => {
	// State setup
	const [isLoading, setIsLoading] = useState(false);
	const [formSuccess, setFormSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// Form handling
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(signInSchema),
	});

	// Adjusted onSubmit function with verification logic
	const onSubmit = async (data) => {
		setIsLoading(true);

		try {
			// Sign in with Supabase
			const { data: signInData, error: signInError } =
				await supabase.auth.signInWithPassword({
					email: data.email,
					password: data.password,
				});

			if (signInError) {
				console.error("Error during sign-in:", signInError);
				throw signInError;
			}

			console.log("Sign-in successful:", signInData);

			setFormSuccess(true);
			reset(); // Reset form on success

			// Retrieve user data after successful sign-in
			const { data: user, error: userError } = await supabase
				.from("User")
				.select('"clientId"') // Notice the double quotes around clientId
				.eq("email", data.email)
				.single();

			if (userError) {
				console.error("Error retrieving user data:", userError);
				throw new Error("Error retrieving user data");
			}

			console.log("Retrieved user data:", user);

			// Check if user object and client ID exist
			if (!user || !user.clientId) {
				console.error("User data is missing or invalid:", user);
				throw new Error("User not found or missing client ID");
			}

			// Verify client ID against the retrieved client ID
			if (data.clientId !== user.clientId) {
				console.error(
					"Invalid client ID:",
					data.clientId,
					"Expected:",
					user.clientId,
				);
				throw new Error("Invalid Client ID");
			}

			// **Step 5. Redirect to webform URL**
			// Replace this with the logic to generate or redirect to the specific webform URL based on the client ID.
		} catch (error) {
			console.error("Error during sign-in process:", error);
			setErrorMessage(error.error_description || error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
			<FloatingLabelWithIcon
				label="Client ID"
				id="clientId"
				type="text"
				icon={
					<Image src={clientIcon} alt="Client ID icon" width="24" height="24" />
				}
				{...register("clientId")}
			/>
			{errors.clientId && (
				<p className="text-red-500">{errors.clientId.message}</p>
			)}

			<FloatingLabelWithIcon
				label="Email"
				id="email"
				type="email"
				icon={<Image src={emailIcon} alt="Email icon" width="24" height="24" />}
				{...register("email")}
			/>
			{errors.email && <p className="text-red-500">{errors.email.message}</p>}

			<FloatingLabelWithIcon
				label="Password"
				id="password"
				type="password"
				icon={
					<Image
						src={passwordIcon}
						alt="Password icon"
						width="24"
						height="24"
					/>
				}
				{...register("password")}
			/>
			{errors.password && (
				<p className="text-red-500">{errors.password.message}</p>
			)}

			<div className="space-y-6">
				<Button
					className="w-full px-4 py-6 text-white font-bold bg-blue-900 hover:bg-blue-950 rounded disabled:bg-blue-300 justify-center items-center"
					disabled={isLoading}
				>
					{isLoading ? "Signing in..." : "Sign-in"}
				</Button>
				<Separator className="mx-1 h-1 bg-gray-100" />
				<Link href="/sign-up">
					<Button
						className="w-full px-4 py-6 text-white font-bold bg-orange-500 hover:bg-orange-600 rounded justify-center items-center"
						onClick={() => {
							/* Placeholder for future functionality */
						}}
					>
						Create an Account
					</Button>
				</Link>
			</div>

			{formSuccess && <p className="text-green-500">Signed in successfully!</p>}
			{errorMessage && <p className="text-red-500">Error: {errorMessage}</p>}
		</form>
	);
};

export default SignInForm;
