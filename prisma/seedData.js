const { PrismaClient } = require("@prisma/client");

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
										{ optionValue: "Over the phone" },
										{ optionValue: "VRI" },
										{ optionValue: "Onsite" },
									],
								},
							},
							{
								fieldName: "appointmentDurationHours",
								label: "Appointment Duration - Hours",
								fieldType: "DROPDOWN",
								options: {
									create: Array.from({ length: 13 }, (_, i) => ({
										optionValue: `${i} hour${i === 1 ? "" : "s"}`,
									})),
								},
							},
							{
								fieldName: "appointmentDurationMinutes",
								label: "Appointment Duration - Minutes",
								fieldType: "DROPDOWN",
								options: {
									create: [
										{ optionValue: "00 minutes" },
										{ optionValue: "15 minutes" },
										{ optionValue: "30 minutes" },
										{ optionValue: "45 minutes" },
									],
								},
							},
							{
								fieldName: "appointmentTimeAMPM",
								label: "AM/PM",
								fieldType: "DROPDOWN",
								options: {
									create: [{ optionValue: "AM" }, { optionValue: "PM" }],
								},
							},
							{
								fieldName: "language",
								label: "Language",
								fieldType: "SEARCHABLE_LIST",
								options: {
									create: [
										{ optionValue: "English" },
										{ optionValue: "Spanish" },
										{ optionValue: "Chinese" },
										{ optionValue: "Vietnamese" },
										{ optionValue: "Tagalog" },
										{ optionValue: "Arabic" },
										{ optionValue: "French" },
										{ optionValue: "Korean" },
										{ optionValue: "Russian" },
										{ optionValue: "German" },
										{ optionValue: "Haitian Creole" },
										{ optionValue: "Portuguese" },
										{ optionValue: "Italian" },
										{ optionValue: "Polish" },
										{ optionValue: "Urdu" },
										{ optionValue: "Japanese" },
										{ optionValue: "Persian" },
										{ optionValue: "Gujarati" },
										{ optionValue: "Bengali" },
										{ optionValue: "ASL" },
										{ optionValue: "CDI" },
										{ optionValue: "Tactile" },
									],
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
								fieldName: "appointmentLocation",
								label: "Address of the Appointment",
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
								fieldName: "consumerName",
								label: "Customer's Name",
								fieldType: "TEXT",
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
								fieldName: "appointmentDescription",
								label: "Description of the Appointment",
								fieldType: "TEXT_AREA",
								options: {
									create: [],
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
								fieldName: "amountOfInterpreters",
								label: "Amount of Interpreters",
								fieldType: "NUMBER",
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
