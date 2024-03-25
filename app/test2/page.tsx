"use client";
import { useState, useRef, useEffect } from "react";
import {
	Input,
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";

export function TimeInput() {
	const [time, setTime] = useState("");
	const [amPm, setAmPm] = useState("AM");
	const inputRef = useRef(null);

	useEffect(() => {
		const input = inputRef.current;
		if (input) {
			const [hour, minute] = time.split(":");
			if (hour >= 12 && hour < 18) {
				setAmPm("PM");
			} else {
				setAmPm("AM");
			}
			// Adjust the input value to include the placeholder text
			if (time === "") {
				input.value = "10:00";
			} else if (minute === undefined) {
				input.value = `${hour}:00`;
			}
		}
	}, [time]);

	function handleTimeChange(e) {
		const input = e.target;
		let value = input.value;
		// Remove the placeholder text when the user starts typing
		if (value.startsWith("10:00")) {
			value = value.replace("10:00", "");
		}
		setTime(value);
		const [hour, minute] = value.split(":");
		// Move focus to minute section when two digits are entered for the hour
		if (hour.length === 2 && (minute === undefined || minute.length === 0)) {
			input.setSelectionRange(3, 3);
		}
	}

	function handleKeyDown(e) {
		if (e.key === "Tab") {
			e.preventDefault();
			inputRef.current.setSelectionRange(3, 3);
		}
	}

	return (
		<div className="flex items-center space-x-2">
			<Input
				ref={inputRef}
				type="text"
				className="w-20 time-input"
				onChange={handleTimeChange}
				onKeyDown={handleKeyDown}
			/>
			<Select value={amPm} onValueChange={setAmPm}>
				<SelectTrigger className="w-20">
					<SelectValue placeholder="Select" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="AM">AM</SelectItem>
					<SelectItem value="PM">PM</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}

export default TimeInput;
