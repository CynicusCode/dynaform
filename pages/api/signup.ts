// pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		res.setHeader("Allow", ["POST"]);
		return res.status(405).end(`Method ${req.method} Not Allowed`);
	}

	const {
		email,
		password,
		clientID,
	}: { email: string; password: string; clientID?: string } = req.body;

	try {
		// Create user in Supabase
		const { user, error: signUpError } = await supabase.auth.signUp({
			email,
			password,
		});
		if (signUpError) throw signUpError;

		// Validate clientID if applicable
		let parsedClientID: number | null = null;
		if (clientID) {
			parsedClientID = parseInt(clientID, 10);
			if (isNaN(parsedClientID)) {
				return res.status(400).json({ message: "Invalid clientID" });
			}
		}

		// Save additional user info in your database using Prisma
		// This operation is optional and depends on your application's needs
		await prisma.user.create({
			data: {
				id: user.id, // Use Supabase user ID as reference
				email: user.email,
				organizationId: parsedClientID,
			},
		});

		return res.status(200).json({ message: "User created successfully" });
	} catch (error: any) {
		// "any" type for error since catch clause variable type annotation is not yet supported in TS.
		console.error("Signup error:", error);
		const message = error.message || "An error occurred during signup.";

		// Generic error to avoid exposing sensitive information
		return res.status(500).json({ message });
	}
}
