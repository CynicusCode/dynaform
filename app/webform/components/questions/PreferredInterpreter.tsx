// PreferredInterpreter.tsx
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const PreferredInterpreter: React.FC = () => {
	const { control, watch } = useFormContext();
	const hasPreferredInterpreter = watch("hasPreferredInterpreter");

	return (
		<FormItem>
			<FormLabel>Do you have a preferred interpreter?</FormLabel>
			<FormControl>
				<div>
					<Controller
						control={control}
						name="hasPreferredInterpreter"
						render={({ field }) => (
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
								className="mb-2"
							>
								I have a preferred interpreter
							</Checkbox>
						)}
					/>
					{hasPreferredInterpreter && (
						<Controller
							control={control}
							name="preferredInterpreterName"
							render={({ field, fieldState: { error } }) => (
								<div>
									<Input
										{...field}
										placeholder="Interpreter's name or ID"
										className="mb-2"
									/>
									{error && <FormMessage>{error.message}</FormMessage>}
								</div>
							)}
						/>
					)}
				</div>
			</FormControl>
		</FormItem>
	);
};

export default PreferredInterpreter;
