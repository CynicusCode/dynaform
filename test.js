const { supabase } = require("./lib/supabaseClient");

async function test() {
	const { data, error } = await supabase
		.from("users") // Adjust based on your table name
		.select("*") // Selects all columns; consider limiting fields for large tables
		.limit(1); // Limits the result to 1 entry for testing purposes

	if (error) {
		console.error("Error testing Supabase connection:", error);
		return;
	}

	console.log("Success! Data retrieved from Supabase:", data);
}

test();
