//ConsumerName.tsx
import React from "react";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { UseFormReturn } from "react-hook-form";

interface ConsumerNameProps {
	form: UseFormReturn<any>;
	name: string;
	label: string;
	placeholder: string;
}

const ConsumerName: React.FC<ConsumerNameProps> = ({
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

export default ConsumerName;
