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

const QuestionServiceType = () => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name="serviceType"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Select the Type of Service</FormLabel>
					<Select {...field}>
						<SelectTrigger>
							<SelectValue placeholder="Service type" />
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
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default QuestionServiceType;
