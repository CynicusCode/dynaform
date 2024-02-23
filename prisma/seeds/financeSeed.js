const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
	const organization = await prisma.organization.create({
		data: {
			name: "Bads Cargo Financial",
			type: "FINANCE_CUSTOM",
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
										{ optionValue: "Over the phone" },
										{ optionValue: "VRI" },
										{ optionValue: "Onsite" },
									],
								},
							},
							{
								fieldName: "providerAddress",
								label: "Provider's Address",
								fieldType: "TEXT_AREA",
								options: {
									create: [],
								},
							},
							{
								fieldName: "consumerName",
								label: "Customer's Name",
								fieldType: "TEXT",
								options: {
									create: [],
								},
							},
							{
								fieldName: "appointmentLocation",
								label: "Branch Address",
								fieldType: "TEXT",
								options: {
									create: [],
								},
							},
							{
								fieldName: "arrivalInstructions",
								label: "Arrival Instructions",
								fieldType: "TEXT_AREA",
								options: {
									create: [],
								},
							},
							{
								fieldName: "appointmentType",
								label: "Appointment Type",
								fieldType: "DROPDOWN",
								options: {
									create: [
										{ optionValue: "Government" },
										{ optionValue: "Medical" },
										{ optionValue: "Medical with Xrays" },
										{ optionValue: "Dental" },
										{ optionValue: "Dental with Xrays" },
										{ optionValue: "Behavioral Health" },
										{ optionValue: "School System" },
										{ optionValue: "Court Proceedings" },
										{ optionValue: "Educational" },
										{ optionValue: "Financial" },
										{ optionValue: "Workshop" },
										{ optionValue: "Forensic Interview" },
									],
								},
							},
							{
								fieldName: "interpreterGender",
								label: "Interpreter Gender",
								fieldType: "DROPDOWN",
								options: {
									create: [
										{ optionValue: "Male" },
										{ optionValue: "Female" },
										{ optionValue: "No Preference" },
									],
								},
							},
							{
								fieldName: "preferredInterpreter",
								label: "Preferred Interpreter",
								fieldType: "CHECKBOX",
								options: {
									create: [],
								},
							},
							{
								fieldName: "branchNumber",
								label: "Branch Number",
								fieldType: "NUMBER",
								options: {
									create: [],
								},
							},
							{
								fieldName: "employeeId",
								label: "Employee Id#",
								fieldType: "TEXT",
								options: {
									create: [],
								},
							},
							{
								fieldName: "appointmentDescription",
								label: "Description of the Appointment",
								fieldType: "TEXT_AREA",
								options: {
									create: [],
								},
							},
							{
								fieldName: "amountOfInterpreters",
								label: "Amount of Interpreters",
								fieldType: "NUMBER",
								options: {
									create: [],
								},
							},
							{
								fieldName: "appointmentDateTime",
								label: "Appointment Date & Time",
								fieldType: "DATE",
								options: {
									create: [],
								},
							},
							{
								fieldName: "Link",
								label: "Link",
								fieldType: "TEXT",
								options: {
									create: [],
								},
							},
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
