// MedicalWebForm.tsx
"use client";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import QuestionServiceType from "./questions/QuestionServiceType";

const formSchema = z.object({
	serviceType: z.string().nonempty("Service Type is required"),
});

type FormData = z.infer<typeof formSchema>;

function MedicalWebform() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
		// Add your logic to interact with the database and generate the service request number
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<QuestionServiceType
					control={form.control}
					field={form.control.getFieldState("serviceType")}
				/>
				<button type="submit">Submit</button>
			</form>
		</Form>
	);
}

export default MedicalWebform;
