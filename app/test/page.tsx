// components/CustomTimeInput.js
"use client";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const CustomTimeInput = () => {
	const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });

	const handleHourChange = (e) => {
		let hour = e.target.value.slice(0, 2); // Limit input length to 2 characters
		hour = hour.replace(/\D/g, ""); // Remove non-digit characters
		if (parseInt(hour, 10) > 12) return; // Prevent entry of hours above 12
		if (hour.length === 1) hour = "0" + hour; // Format single-digit hours

		setTime((prevTime) => ({
			...prevTime,
			hour,
			period: parseInt(hour, 10) >= 1 && parseInt(hour, 10) <= 6 ? "PM" : "AM",
		}));
	};

	const handleMinuteChange = (e) => {
		let minute = e.target.value.slice(0, 2); // Limit input length to 2 characters
		minute = minute.replace(/\D/g, ""); // Remove non-digit characters
		setTime((prevTime) => ({ ...prevTime, minute }));
	};

	return (
		<div className="flex items-center space-x-2">
			<Input
				placeholder="HH"
				value={time.hour}
				onChange={handleHourChange}
				maxLength={2}
				className="w-20"
			/>
			:
			<Input
				placeholder="MM"
				value={time.minute}
				onChange={handleMinuteChange}
				maxLength={2}
				className="w-20"
			/>
			<Select
				value={time.period}
				onChange={(e) =>
					setTime((prevTime) => ({ ...prevTime, period: e.target.value }))
				}
				className="w-20"
			>
				<option value="AM">AM</option>
				<option value="PM">PM</option>
			</Select>
		</div>
	);
};

export default CustomTimeInput;
