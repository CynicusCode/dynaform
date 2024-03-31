// ArrivalInstructions.tsx
import React from "react";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { UseFormReturn } from "react-hook-form";

interface ArrivalInstructionsProps {
	form: UseFormReturn<any>;
	name: string;
	label: string;
	placeholder: string;
}

const ArrivalInstructions: React.FC<ArrivalInstructionsProps> = ({
	form,
	name,
	label,
	placeholder,
}) => (
	<InputWithLabel
		label={label}
		id={name}
		placeholder={placeholder}
		value={form.getValues(name)}
		{...form.register(name)}
	/>
);

export default ArrivalInstructions;
