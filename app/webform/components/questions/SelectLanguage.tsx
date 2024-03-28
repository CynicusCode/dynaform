"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Form,
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

const languages = [
	{ label: "Spanish", value: "Spanish" },
	{ label: "Chinese", value: "Chinese" },
	{ label: "Vietnamese", value: "Vietnamese" },
	{ label: "Tagalog", value: "Tagalog" },
	{ label: "Arabic", value: "Arabic" },
	{ label: "French", value: "French" },
	{ label: "Korean", value: "Korean" },
	{ label: "Russian", value: "Russian" },
	{ label: "German", value: "German" },
	{ label: "Haitian Creole", value: "Haitian Creole" },
	{ label: "Portuguese", value: "Portuguese" },
	{ label: "Italian", value: "Italian" },
	{ label: "Polish", value: "Polish" },
	{ label: "Urdu", value: "Urdu" },
	{ label: "Japanese", value: "Japanese" },
	{ label: "Persian", value: "Persian" },
	{ label: "Gujarati", value: "Gujarati" },
	{ label: "Bengali", value: "Bengali" },
	{ label: "American Sign Language", value: "ASL" },
	{ label: "Certified Deaf Interpreter", value: "CDI" },
	{ label: "Tactile", value: "Tactile" },
] as const;

const selectLanguageFormSchema = z.object({
	language: z.string({
		required_error: "Please select a language.",
	}),
});

type SelectLanguageFormValues = z.infer<typeof selectLanguageFormSchema>;

export function SelectLanguage() {
	const form = useForm<SelectLanguageFormValues>({
		resolver: zodResolver(selectLanguageFormSchema),
	});

	function onSubmit(data: SelectLanguageFormValues) {
		// Handle form submission and connect with the database
		console.log("Selected language:", data.language);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="language"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Language</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant="outline"
											role="combobox"
											className={cn(
												"w-[200px] justify-between",
												!field.value && "text-muted-foreground",
											)}
										>
											{field.value
												? languages.find(
														(language) => language.value === field.value,
												  )?.label
												: "Select language"}
											<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-[200px] p-0">
									<Command>
										<CommandInput placeholder="Search language..." />
										<CommandEmpty>No language found.</CommandEmpty>
										<CommandGroup>
											{languages.map((language) => (
												<CommandItem
													value={language.label}
													key={language.value}
													onSelect={() => {
														form.setValue("language", language.value);
													}}
												>
													<CheckIcon
														className={cn(
															"mr-2 h-4 w-4",
															language.value === field.value
																? "opacity-100"
																: "opacity-0",
														)}
													/>
													{language.label}
												</CommandItem>
											))}
										</CommandGroup>
									</Command>
								</PopoverContent>
							</Popover>
							<FormDescription>
								This is the language that will be used in the form.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}

export default SelectLanguage;
