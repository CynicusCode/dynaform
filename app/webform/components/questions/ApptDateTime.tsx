// ApptDateTime.tsx
"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const ApptDateTime = () => {
	const { control } = useFormContext();

	return (
		<FormItem>
			<FormLabel>Appointment Date & Time</FormLabel>
			<FormControl>
				<Controller
					name="appointmentDateTime"
					control={control}
					render={({ field }) => (
						<Input
							type="text"
							placeholder="MM/DD/YY"
							{...field}
							className="pr-10"
						/>
					)}
				/>
			</FormControl>
			<FormDescription>
				Enter the desired appointment date and time.
			</FormDescription>
			<FormMessage />
		</FormItem>
	);
};

export default ApptDateTime;
