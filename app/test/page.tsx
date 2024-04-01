//testpage.tsx

import React from "react";
import AddressInput from "../webform/components/questions/addresss/AddressInput";

const TestAddressInput = () => {
	return (
		<div className="justify-center m-40">
			<AddressInput
				name="address"
				label="Enter Address"
				placeholder="Start typing..."
			/>
		</div>
	);
};

export default TestAddressInput;
