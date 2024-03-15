// signup.ts

import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method Not Allowed" });
	}

	const { email, password, clientID, clientType } = req.body;

	try {
		// Supabase user creation
		const {
			data: { user },
			error: signUpError,
		} = await supabase.auth.signUp({
			email,
			password,
		});

		if (signUpError || !user) {
			throw new Error(signUpError?.message || "Supabase signup failed");
		}

		if (!clientID || clientType === "new") {
			return res.status(400).json({
				message:
					"New organizations are not supported. Please provide a valid client ID.",
			});
		}

		// Check if the organization with the provided clientID exists
		const organization = await prisma.organization.findUnique({
			where: { clientId: clientID },
		});

		if (!organization) {
			return res
				.status(400)
				.json({ message: "Invalid clientID. Organization not found." });
		}

		// Prisma user creation with linked orgConnectorId and clientId
		await prisma.user.create({
			data: {
				id: user.id,
				email: user.email,
				orgConnectorId: organization.id,
				clientId: clientID,
			},
		});

		return res.status(200).json({
			message: "User created successfully and linked to organization.",
		});
	} catch (error) {
		console.error("Error during user registration:", error);
		return res
			.status(500)
			.json({ message: error.message || "An error occurred during signup." });
	}
}
