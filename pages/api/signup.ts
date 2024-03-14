import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method Not Allowed" });
	}

	const { email, password, clientID } = req.body;

	try {
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

		// Assume clientID is optional and maps to a valid organizationId if provided
		let organizationId = null;
		if (clientID) {
			const organization = await prisma.organization.findUnique({
				where: { clientId: clientID },
			});
			if (!organization) {
				return res.status(400).json({ message: "Invalid clientID" });
			}
			organizationId = organization.id;
		}

		await prisma.user.create({
			data: {
				id: user.id,
				email: user.email,
				organizationId: organizationId,
				// Omit the password field or use a placeholder if necessary
			},
		});

		return res.status(200).json({ message: "User created successfully" });
	} catch (error) {
		console.error("Signup error:", error);
		return res
			.status(500)
			.json({ error: error.message || "An error occurred during signup." });
	}
}
