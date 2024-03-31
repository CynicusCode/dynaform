// InterpreterGender.tsx
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

const InterpreterGender = () => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name="interpreterGender"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Interpreter Gender</FormLabel>
					<Select {...field}>
						<SelectTrigger>
							<SelectValue placeholder="Select interpreter gender" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Genders</SelectLabel>
								<SelectItem value="Male">Male</SelectItem>
								<SelectItem value="Female">Female</SelectItem>
								<SelectItem value="No Preference">No Preference</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default InterpreterGender;
