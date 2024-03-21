//MedicalWebForm.tsx
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
import { Label } from "@/components/ui/label";

const formSchema = z.object({
	serviceType: z.string().nonempty("Service Type is required"),
});

type FormData = z.infer<typeof formSchema>;

function MedicalWebform() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
		// Add your logic to interact with the database and generate the service request number
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Label htmlFor="Service Type"> Select Service Type </Label>
			<div className="flex mt-4 relative z-[1]">
				<Select>
					<SelectTrigger className="rounded-xl">
						<SelectValue
							{...register("serviceType")}
							placeholder="Service type"
						/>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Service Types</SelectLabel>
							<SelectItem value="Over the phone">Over the phone</SelectItem>
							<SelectItem value="VRI">Virtual Onsite</SelectItem>
							<SelectItem value="Onsite">Onsite- face-to-face</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="mt-4">
				<div>
					writing something here just to test if it goes behind the content
				</div>
				<Label htmlFor="Date">Appointment Date & Time</Label>
				{errors.serviceType && <p>{errors.serviceType.message}</p>}
			</div>
		</form>
	);
}

export default MedicalWebform;
