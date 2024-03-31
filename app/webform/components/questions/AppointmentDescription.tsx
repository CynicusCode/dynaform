// AppointmentDescription.tsx
import React from "react";
import { InputWithLabel } from "@/components/ui/InputWithLabel"; // Assuming you have a TextareaWithLabel component
import { UseFormReturn } from "react-hook-form";

interface AppointmentDescriptionProps {
	form: UseFormReturn<any>;
	name: string;
	label: string;
	placeholder: string;
}

const AppointmentDescription: React.FC<AppointmentDescriptionProps> = ({
	form,
	name,
	label,
	placeholder,
}) => (
	<InputWithLabel
		label={label}
		id={name}
		placeholder={placeholder}
		{...form.register(name)}
	/>
);

export default AppointmentDescription;
