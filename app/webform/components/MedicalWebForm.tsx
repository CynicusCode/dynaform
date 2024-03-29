// MedicalWebForm.tsx
"use client";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import QuestionServiceType from "./questions/QuestionServiceType";
import { Button } from "@/components/ui/button";
import { SelectLanguage } from "./questions/SelectLanguage";
import DatePicker from "./questions/DatePicker";
import TimeInput from "./questions/TimeInput";
import QuestionDuration from "./questions/QuestionDuration";

const formSchema = z.object({
	serviceType: z.string().min(1, "Service Type is required."),
	language: z.string({ required_error: "Please select a language" }),
	appointmentDate: z.object({
		date: z.date({ required_error: "An appointment date is required." }),
		time: z.string({
			required_error: "Please enter the time of the appointment.",
		}),
	}),
	duration: z.object({
		hours: z.string().min(1, "Please select the hours."),
		minutes: z.string().min(1, "Please select the minutes."),
	}),
});

type FormData = z.infer<typeof formSchema>;

function MedicalWebform() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			duration: {
				hours: "0",
				minutes: "45",
			},
		},
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
				<SelectLanguage control={form.control} name="language" />
				<DatePicker control={form.control} name="appointmentDate.date" />
				<TimeInput control={form.control} name="appointmentDate.time" />
				<QuestionDuration control={form.control} />
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}

export default MedicalWebform;
