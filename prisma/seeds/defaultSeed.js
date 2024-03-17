const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
	const organization = await prisma.organization.create({
		data: {
			name: "Default Medical Center",
			type: "MEDICAL",
			clientId: "123456",
			template: {
				create: {
					formFields: {
						create: [
							{
								fieldName: "serviceType",
								label: "Service Type",
								placeholder: "Select a service type",
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
								placeholder: "8",
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
								placeholder: "30 Minutes",
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
								label: "Select AM/PM",
								placeholder: "AM",
								fieldType: "DROPDOWN",
								options: {
									create: [{ optionValue: "AM" }, { optionValue: "PM" }],
								},
							},
							{
								fieldName: "language",
								label: "Language",
								placeholder: "American Sign Language",
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
								placeholder: "10/28/24",
								fieldType: "DATE",
								options: {
									create: [],
								},
							},
							{
								fieldName: "appointmentLocation",
								label: "Address of the Appointment",
								placeholder:
									"Federal Medical Facility, 1234 Apple Street, New York, NY 10010",
								fieldType: "TEXT",
								options: {
									create: [],
								},
							},
							{
								fieldName: "arrivalInstructions",
								label: "Arrival Instructions",
								placeholder: "2nd Floor, Front Desk",
								fieldType: "TEXT_AREA",
								options: {
									create: [],
								},
							},
							{
								fieldName: "consumerName",
								label: "Patient's Name;",
								placeholder: "Joe Doe",
								fieldType: "TEXT",
								options: {
									create: [],
								},
							},
							{
								fieldName: "appointmentType",
								label: "Appointment Type",
								placeholder: "Medical",
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
								placeholder: "Blood work follow up with Dr. McGiver",
								fieldType: "TEXT_AREA",
								options: {
									create: [],
								},
							},
							{
								fieldName: "interpreterGender",
								label: "Interpreter Gender",
								placeholder: "Select interpreter gender",
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
								placeholder: "Preferred Interpreter",
								fieldType: "CHECKBOX",
								options: {
									create: [],
								},
							},
							{
								fieldName: "amountOfInterpreters",
								label: "Amount of Interpreters",
								placeholder: "1",
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
