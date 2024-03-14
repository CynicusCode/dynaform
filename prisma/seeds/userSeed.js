const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedUser() {
	try {
		// Assuming you have an organization with clientId "123456"
		const organization = await prisma.organization.findUnique({
			where: {
				clientId: "123456",
			},
		});

		if (!organization) {
			console.log(
				"Organization not found, ensure the organization is seeded first.",
			);
			return;
		}

		const user = await prisma.user.create({
			data: {
				email: "eve@defaultmedical.com",
				// In a real app, hash the password using a library like bcrypt and store the hash
				password: "Password", // This is just for demonstration; do not store plain passwords.
				organizationId: organization.id,
			},
		});

		console.log(`User created: ${user.email}`);
	} catch (error) {
		console.error("Error seeding user:", error);
	} finally {
		await prisma.$disconnect();
	}
}

seedUser();
