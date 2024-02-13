import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const organization = await prisma.organization.create({
		data: {
			name: "Vanilla Default Medical Center",
			type: "MEDICAL",
			template: {
				create: {
					formFields: {
						create: [
							{
								fieldName: "serviceType",
								label: "Service Type",
								fieldType: "DROPDOWN",
								options: {
									create: [
										{ optionValue: "Face-to-face" },
										{ optionValue: "Video" },
										{ optionValue: "Phone" },
									],
								},
							},
							{
								fieldName: "language",
								label: "Language",
								fieldType: "SEARCHABLE_LIST",
								options: {
									create: [
										// Add the top 20 languages here, including CDI, ASL, and tactile
									],
								},
							},
							// Continue adding other form fields as needed...
						],
					},
				},
			},
		},
	});

	console.log(`Organization created: ${organization.name}`);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
