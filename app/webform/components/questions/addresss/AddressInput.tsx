//AddressInput.tsx
"use client";
import React, { useState } from "react";
import useAddressValidation from "./addressValidationHook";
import { InputWithLabel } from "@/components/ui/InputWithLabel";

interface AddressInputProps {
	name: string;
	label: string;
	placeholder: string;
}

const AddressInput: React.FC<AddressInputProps> = ({
	name,
	label,
	placeholder,
}) => {
	const { isLoading, autocomplete, autocompleteSuggestions } =
		useAddressValidation();

	const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
	const [value, setValue] = useState("");

	const handleInputChange = async (event) => {
		const input = event.target.value;
		setValue(input);
		await autocomplete(input);
		setIsSuggestionsOpen(true);
	};

	const handleSuggestionClick = (suggestion) => {
		setValue(suggestion.description);
		setIsSuggestionsOpen(false);
	};

	return (
		<div>
			<InputWithLabel
				label={label}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={handleInputChange}
			/>
			{isLoading && <span>Loading suggestions...</span>}

			{isSuggestionsOpen && (
				<ul className="suggestions-list">
					{autocompleteSuggestions.map((suggestion) => (
						<li
							key={suggestion.id}
							onClick={() => handleSuggestionClick(suggestion)}
						>
							{suggestion.description}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AddressInput;
