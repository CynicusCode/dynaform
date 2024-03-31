// AppointmentType.tsx
"use client";
import React from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const AppointmentType = () => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name="appointmentType"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Appointment Type</FormLabel>
					<Select {...field}>
						<SelectTrigger>
							<SelectValue placeholder="Medical" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Appointment Types</SelectLabel>
								<SelectItem value="Government">Government</SelectItem>
								<SelectItem value="Medical">Medical</SelectItem>
								<SelectItem value="Medical with Xrays">
									Medical with Xrays
								</SelectItem>
								<SelectItem value="Dental">Dental</SelectItem>
								<SelectItem value="Dental with Xrays">
									Dental with Xrays
								</SelectItem>
								<SelectItem value="Behavioral Health">
									Behavioral Health
								</SelectItem>
								<SelectItem value="School System">School System</SelectItem>
								<SelectItem value="Court Proceedings">
									Court Proceedings
								</SelectItem>
								<SelectItem value="Educational">Educational</SelectItem>
								<SelectItem value="Financial">Financial</SelectItem>
								<SelectItem value="Workshop">Workshop</SelectItem>
								<SelectItem value="Forensic Interview">
									Forensic Interview
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default AppointmentType;
