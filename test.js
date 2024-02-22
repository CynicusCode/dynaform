const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function fetchOrganizationDetails() {
	try {
		const organization = await prisma.organization.findFirst({
			where: {
				name: "Default Medical Center",
			},
			include: {
				template: {
					include: {
						formFields: {
							include: {
								options: true, // Include options for each form field
							},
						},
					},
				},
			},
		});

		if (organization) {
			console.log(
				"Organization Details:",
				JSON.stringify(organization, null, 2),
			);
		} else {
			console.log("Organization not found.");
		}
	} catch (error) {
		console.error("Error fetching organization details:", error);
	} finally {
		await prisma.$disconnect();
	}
}

fetchOrganizationDetails();
