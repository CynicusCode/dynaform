// ServiceTypeQuestion.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
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
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const ServiceTypeQuestion = () => {
	const { register } = useFormContext();

	return (
		<FormItem>
			<FormLabel>Select the Type of Service</FormLabel>
			<Select {...register("serviceType")}>
				<FormControl>
					<SelectTrigger>
						<SelectValue placeholder="Service type" />
					</SelectTrigger>
				</FormControl>
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
	);
};

export default ServiceTypeQuestion;
