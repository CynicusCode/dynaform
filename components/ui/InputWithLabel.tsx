// InputWithLabel.tsx
import * as React from "react";
import { Input, InputProps } from "./Input"; // Adjust the import path to where your Input component is located
// InputWithLabel.tsx
import "./InputWithLabel.css";
// ...

export interface InputWithLabelProps extends InputProps {
	label: string;
	id: string; // Ensure id is passed for accessibility and label association
	placeholder?: string;
}

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
	({ label, id, className, placeholder, ...props }, ref) => {
		return (
			<div className="relative z-0 mb-6">
				<Input
					ref={ref}
					id={id}
					type="text"
					placeholder={placeholder}
					className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 placeholder-gray-400 input-text-black ${className}`}
					{...props}
				/>
				<label
					htmlFor={id}
					className="absolute text-sm text-gray-900 dark:text-gray-400 left-2 -top-1 z-10 bg-white px-1"
					style={{ transform: "translateY(-50%)" }}
				>
					{label}
				</label>
			</div>
		);
	},
);

InputWithLabel.displayName = "InputWithLabel";

export { InputWithLabel };
