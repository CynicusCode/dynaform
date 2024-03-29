"use client";
import { Control, useWatch } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface QuestionDurationProps {
	control: Control<any>;
}

export function QuestionDuration({ control }: QuestionDurationProps) {
	const hoursOptions = Array.from({ length: 25 }, (_, i) => i.toString());
	const selectedHours = useWatch({ control, name: "duration.hours" });

	const minutesOptions =
		selectedHours === "0" ? ["45"] : ["00", "15", "30", "45"];

	return (
		<div className="flex space-x-4">
			<FormField
				control={control}
				name="duration.hours"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Hours</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select hours" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{hoursOptions.map((option) => (
									<SelectItem key={option} value={option}>
										{option}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="duration.minutes"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Minutes</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select minutes" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{minutesOptions.map((option) => (
									<SelectItem key={option} value={option}>
										{option}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
}

export default QuestionDuration;
