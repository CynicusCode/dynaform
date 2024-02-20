import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../lib/supabaseClient"; // Your Supabase configuration
import { useRouter } from "next/router";
import Link from "next/link";
import { Input, Label, Button, ErrorMessage, FormContainer } from "./styles";
// Import your styled components

interface SignInFormData {
	accountNumber: string;
	email: string;
	password: string;
}

const SignInForm: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormData>();

	const onSubmit = async (data: SignInFormData) => {
		setIsLoading(true);
		setError(null);

		try {
			const { error } = await supabase.auth.signIn({
				email: data.email,
				password: data.password,
			});

			if (error) throw error;

			// Successful sign-in - redirect to dashboard or appropriate page
			router.push("/dashboard");
		} catch (error: any) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<FormContainer>
			<h2>Sign In</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					{" "}
					{/* Account Number */}
					<Label htmlFor="accountNumber">Account Number</Label>
					<Input
						id="accountNumber"
						type="text"
						{...register("accountNumber", { required: true })}
					/>
					{errors.accountNumber && (
						<ErrorMessage>Account number is required</ErrorMessage>
					)}
				</div>

				<div>
					{" "}
					{/* Email */}
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
					/>
					{errors.email && (
						<ErrorMessage>Please enter a valid email address</ErrorMessage>
					)}
				</div>

				<div>
					{" "}
					{/* Password */}
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						{...register("password", { required: true, minLength: 8 })}
					/>
					{errors.password && (
						<ErrorMessage>Password must be at least 8 characters</ErrorMessage>
					)}
				</div>

				{error && <ErrorMessage>{error}</ErrorMessage>}

				<Button type="submit" disabled={isLoading}>
					{isLoading ? "Signing in..." : "Sign In"}
				</Button>

				<p>
					Don't have an account?{" "}
					<Link href="/signup">
						<a>Sign Up</a>
					</Link>
				</p>
			</form>
		</FormContainer>
	);
};

export default SignInForm;
