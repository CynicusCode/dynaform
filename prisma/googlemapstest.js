require("dotenv").config(); // Load environment variables

const apiKey = process.env.GOOGLE_MAPS_API;
const address = "1600 Amphitheatre Parkway, Mountain View, CA";
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

fetch(geocodeUrl)
	.then((response) => response.json())
	.then((data) => {
		if (data.status === "OK") {
			console.log("API Key working! Geocoding results:", data);
		} else {
			console.error("API Key Issue:", data.error_message);
		}
	})
	.catch((error) => console.error("Geocoding Fetch Error:", error));
