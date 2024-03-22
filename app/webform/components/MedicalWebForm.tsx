// MedicalWebform.tsx
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import ApptDateTime from "./ApptDateTime";
import { z } from "zod";
import ServiceTypeQuestion from "../webform/components/questions/ServiceTypeQuestion";

const formSchema = z.object({
	serviceType: z.string().nonempty("Service Type is required"),
	appointmentDateTime: z.date().optional(),
});

type FormData = z.infer<typeof formSchema>;

function MedicalWebform() {
	const methods = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
		// Add your logic to interact with the database and generate the service request number
	};

	return (
		<FormProvider {...methods}>
			<Form onSubmit={methods.handleSubmit(onSubmit)}>
				<ServiceTypeQuestion />
				<button type="submit">Submit</button>
			</Form>
		</FormProvider>
	);
}

export default MedicalWebform;
