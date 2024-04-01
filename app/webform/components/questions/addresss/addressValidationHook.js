import { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

function useAddressValidation() {
	const [isLoading, setIsLoading] = useState(false);
	const [addressStatus, setAddressStatus] = useState({
		isValid: false,
		suggestions: [],
	});

	const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

	const validateAddress = async (address) => {
		setIsLoading(true);

		try {
			const apiKey = process.env.GOOGLE_MAPS_API; // Fetch API key from environment
			const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
				address,
			)}&key=${apiKey}`;
			const response = await axios.get(url);

			if (response.data.status === "OK") {
				setAddressStatus({ isValid: true, suggestions: response.data.results });
			} else {
				setAddressStatus({ isValid: false, suggestions: [] });
			}
		} catch (error) {
			console.error("Error validating address:", error);
			setAddressStatus({ isValid: false, suggestions: [] });
		} finally {
			setIsLoading(false);
		}
	};

	const autocomplete = async (input) => {
		console.log("Autocomplete input:", input);
		setIsLoading(true);
		setAutocompleteSuggestions([]);

		try {
			const apiKey = process.env.GOOGLE_MAPS_API; // Fetch API key from environment
			const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
				input,
			)}&key=${apiKey}`;
			const response = await axios.get(url);
			console.log("API response:", response);
			console.log("autocompleteSuggestions:", autocompleteSuggestions);

			if (response.data.status === "OK") {
				setAutocompleteSuggestions(response.data.predictions);
			} else {
				setAutocompleteSuggestions([]);
			}
		} catch (error) {
			console.error("Error fetching autocomplete suggestions:", error);
			setAutocompleteSuggestions([]);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		addressStatus,
		validateAddress,
		autocomplete,
		autocompleteSuggestions,
	};
}

export default useAddressValidation;
