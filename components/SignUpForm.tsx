// SignUpForm.tsx
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailIcon from "../public/icons/icon_email.svg";
import passwordIcon from "../public/icons/icon_password.svg";
import clientIcon from "../public/icons/icon_organization.svg";
import Image from "next/image";
import { supabase } from "../lib/supabaseClient";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FloatingLabelWithIcon } from "./ui/FloatingLabelWithIcon";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import router from "next/router";

// Adjusted Zod schema to include clientID and agreeToTerms
const signUpSchema = z
	.object({
		email: z.string().email("Invalid email format"),
		password: z.string().min(6, "Password must be at least 6 characters long"),
		confirmPassword: z.string(),
		clientType: z.string(),
		clientID: z.string().optional(), // Optional clientID field
		agreeToTerms: z
			.boolean()
			.refine((val) => val, "You must accept the terms and conditions"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(signUpSchema),
	});

	const [isLoading, setIsLoading] = useState(false);
	const [formSuccess, setFormSuccess] = useState(false);
	const [formError, setFormError] = useState(""); // Corrected variable name for consistency

	const clientType = watch("clientType"); // Correct use of watch from useForm

	const onSubmit = async (data) => {
		setIsLoading(true);
		// Call to API route
		try {
			const response = await fetch("/api/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			const result = await response.json();
			if (!response.ok)
				throw new Error(result.message || "Something went wrong");
			// Redirect or show success message
			router.push("/success"); // Adjust as necessary
		} catch (error) {
			setFormError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
			<FloatingLabelWithIcon
				label="E-mail"
				id="email"
				type="email"
				icon={<Image src={emailIcon} alt="Email icon" width={24} height={24} />}
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
						width={24}
						height={24}
					/>
				}
				{...register("password")}
			/>
			{errors.password && (
				<p className="text-red-500">{errors.password.message}</p>
			)}

			<FloatingLabelWithIcon
				label="Re-enter password"
				id="confirmPassword"
				type="password"
				icon={
					<Image
						src={passwordIcon}
						alt="Password icon"
						width={24}
						height={24}
					/>
				}
				{...register("confirmPassword")}
			/>
			{errors.confirmPassword && (
				<p className="text-red-500">{errors.confirmPassword.message}</p>
			)}

			<Separator className="mx-1 h-1 bg-gray-100" />

			<RadioGroup {...register("clientType")}>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="existingOnsite" id="existingOnsite" />
					<Label htmlFor="existingOnsite">I have a client ID for Onsite.</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="existingOPI" id="existingOPI" />
					<Label htmlFor="existingOPI">I have a client ID for (OPI).</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="new" id="new" />
					<Label htmlFor="new">I am a completely new customer.</Label>
				</div>
			</RadioGroup>

			{(clientType === "existingOnsite" || clientType === "existingOPI") && (
				<FloatingLabelWithIcon
					label="Client ID"
					id="clientID"
					type="text"
					icon={
						<Image
							src={clientIcon}
							alt="Client ID icon"
							width={24}
							height={24}
						/>
					}
					{...register("clientID")}
				/>
			)}

			<Separator className="mx-1 h-1 bg-gray-100" />

			<div className="flex items-center space-x-2">
				<Checkbox
					id="terms"
					{...register("agreeToTerms", {
						setValueAs: (value) => value === "on",
					})}
				/>
				<Label htmlFor="terms">Accept terms and conditions</Label>
			</div>
			{errors.agreeToTerms && (
				<p className="text-red-500">{errors.agreeToTerms.message}</p>
			)}

			{formError && <p className="text-red-500">Error: {formError}</p>}

			<Button
				className="w-full px-4 py-6 text-white font-bold bg-orange-500 hover:bg-orange-600 rounded justify-center items-center"
				type="submit"
				disabled={isLoading}
			>
				{isLoading ? "Processing..." : "Next"}
			</Button>
		</form>
	);
};

export default SignUpForm;
