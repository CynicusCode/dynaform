"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "../lib/supabaseClient"; // Ensure this is correctly set up
import { FloatingLabelWithIcon } from "./ui/FloatingLabelWithIcon";
import clientIcon from "../public/icons/icon_organization.svg";

// Define the schema
const signInSchema = z.object({
	clientId: z.string().min(1, "Client ID is required"),
	email: z.string().email("Invalid email format"),
	password: z.string().min(8, "Password must be at least 8 characters long"),
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
			const { error } = await supabase.auth.signInWithPassword({
				email: data.email,
				password: data.password,
			});

			if (error) throw error;

			setFormSuccess(true);
			reset(); // Reset form on success

			// Retrieve user data after successful sign-in
			const user = await supabase
				.from("User")
				.select("organizationId")
				.single();

			// Check if user object and organization ID exist
			if (!user || !user.data.organizationId) {
				throw new Error("User not found or missing organization ID");
			}

			// Verify client ID against organization ID
			if (data.clientId !== user.data.organizationId.toString()) {
				throw new Error("Invalid Client ID");
			}

			// **Step 5. Redirect to webform URL (replace with your logic)**
			// Replace this with the logic to generate or redirect to the specific webform URL based on the organization ID.
		} catch (error) {
			setErrorMessage(error.error_description || error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			{/* Inputs */}
			<FloatingLabelWithIcon
				label="Client ID"
				id="clientId"
				type="text"
				icon={clientIcon} // Pass the imported clientIcon
				{...register("clientId")}
			/>

			{errors.clientId && (
				<p className="text-red-500">{errors.clientId.message}</p>
			)}

			<FloatingLabelWithIcon
				label="Username (Email)"
				id="email"
				type="email"
				icon={clientIcon}
				{...register("email")}
			/>
			{errors.email && <p className="text-red-500">{errors.email.message}</p>}

			<FloatingLabelWithIcon
				label="Password"
				id="password"
				type="password"
				icon={clientIcon}
				{...register("password")}
			/>
			{errors.password && (
				<p className="text-red-500">{errors.password.message}</p>
			)}

			<button
				type="submit"
				disabled={isLoading}
				className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded disabled:bg-blue-300"
			>
				{isLoading ? "Submitting..." : "Submit"}
			</button>

			{formSuccess && <p className="text-green-500">Signed in successfully!</p>}
			{errorMessage && <p className="text-red-500">Error: {errorMessage}</p>}
		</form>
	);
};

export default SignInForm;
