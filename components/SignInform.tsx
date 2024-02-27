// Assuming you have correctly set up and imported your Supabase client as `supabase`
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "./supabaseClient"; // Ensure this is correctly set up
import FloatingLabelInput from "./components/ui/FloatingLabelInput";

// Define the schema
const signupSchema = z.object({
	clientId: z.string().min(1, "Client ID is required"),
	username: z.string().email("Invalid email format"),
	password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Webform = () => {
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
		resolver: zodResolver(signupSchema),
	});

	// Adjusted onSubmit function to align with Supabase auth
	const onSubmit = async (data) => {
		setIsLoading(true);

		try {
			const { error } = await supabase.auth.signUp({
				email: data.username,
				password: data.password,
			});

			if (error) throw error;

			setFormSuccess(true);
			reset(); // Reset form on success
		} catch (error) {
			setErrorMessage(error.error_description || error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			{/* Inputs */}
			<FloatingLabelInput
				label="Client ID"
				id="clientId"
				type="text"
				{...register("clientId")}
			/>
			{errors.clientId && (
				<p className="text-red-500">{errors.clientId.message}</p>
			)}

			<FloatingLabelInput
				label="Username (Email)"
				id="username"
				type="email"
				{...register("username")}
			/>
			{errors.username && (
				<p className="text-red-500">{errors.username.message}</p>
			)}

			<FloatingLabelInput
				label="Password"
				id="password"
				type="password"
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

			{formSuccess && (
				<p className="text-green-500">Account created successfully!</p>
			)}
			{errorMessage && <p className="text-red-500">Error: {errorMessage}</p>}
		</form>
	);
};

export default Webform;
