//testSupabase.js

const { createClient } = require("@supabase/supabase-js");

// Initialize the Supabase client
const supabaseUrl = "https://baetgjgbjhoahkacgtbj.supabase.co";
const supabaseAnonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhZXRnamdiamhvYWhrYWNndGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1MTUxNDYsImV4cCI6MjAyMzA5MTE0Nn0.ZFbm5WkUsBJ0SeNdqhP9x4IsWVxB54qqgyjKdVk_wqU";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testQueries() {
	try {
		// Retrieve organization information
		const { data: organizationData, error: organizationError } = await supabase
			.from("Organization")
			.select("*")
			.eq("clientId", "123456");

		if (organizationError) {
			throw organizationError;
		}

		console.log("Organization:", organizationData);

		// Retrieve user information
		const { data: userData, error: userError } = await supabase
			.from("User")
			.select("clientId, orgConnectorId")
			.eq("email", "dev.daniel.garcia@gmail.com");

		if (userError) {
			throw userError;
		}

		console.log("User:", userData);
	} catch (error) {
		console.error("Error testing queries:", error);
	}
}

// Run the test
testQueries();
