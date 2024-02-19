"use client";
import * as React from "react";
import { Input, InputProps } from "./Input"; // Adjust the import path as needed

export interface FloatingLabelWithIconProps extends InputProps {
	label: string;
	id: string; //
	icon: React.ReactNode; // Icon is expected for this component
}

const FloatingLabelWithIcon = React.forwardRef<
	HTMLInputElement,
	FloatingLabelWithIconProps
>(({ label, id, className, icon, ...props }, ref) => {
	const [isFocused, setIsFocused] = React.useState(false);

	return (
		<div className="relative z-0 mb-6 flex items-center">
			<div
				className={`absolute ml-2 transition-opacity duration-300 ${
					isFocused ? "opacity-0" : "opacity-70"
				}`}
			>
				{icon}
			</div>
			<Input
				ref={ref}
				id={id}
				type="text"
				className={`pl-8 pr-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${className}`}
				placeholder=" "
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				{...props}
			/>
			<label
				htmlFor={id}
				className="absolute left-8 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
			>
				{label}
			</label>
		</div>
	);
});

FloatingLabelWithIcon.displayName = "FloatingLabelWithIcon";

export { FloatingLabelWithIcon };
