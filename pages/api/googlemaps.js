import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
	const { input } = req.query;

	const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
		input,
	)}&key=${process.env.GOOGLE_MAPS_API}`;

	const response = await axios.get(url);

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.status(response.status).json(response.data);
}
