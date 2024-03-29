// DatePicker.tsx
"use client";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Control, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface DatePickerProps {
	control: Control<any>;
	name: string;
}

export function DatePicker({ control, name }: DatePickerProps) {
	const [open, setOpen] = useState(false);

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>Appointment Date</FormLabel>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant={"outline"}
									className={cn(
										"w-[240px] pl-3 text-left font-normal",
										!field.value?.date && "text-muted-foreground",
									)}
								>
									{field.value?.date ? (
										format(field.value.date, "EEEE, MMMM d, yyyy")
									) : (
										<span>Pick a date</span>
									)}
									<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								mode="single"
								selected={field.value?.date}
								onSelect={(date) => {
									field.onChange({ ...field.value, date });
									setOpen(false);
								}}
								disabled={(date) => date < new Date()}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
					<FormDescription></FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

export default DatePicker;
