// MedicalWebForm.tsx
"use client";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

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
				<FormField
					control={form.control}
					name="serviceType"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Select the Type of Service</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger>
									<SelectValue placeholder="Service type" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Service Types</SelectLabel>
										<SelectItem value="Over the phone">
											Over the phone
										</SelectItem>
										<SelectItem value="VRI">Virtual Onsite</SelectItem>
										<SelectItem value="Onsite">Onsite- face-to-face</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<button type="submit">Submit</button>
			</form>
		</Form>
	);
}

export default MedicalWebform;
