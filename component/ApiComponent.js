import axios from "axios";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useState } from "react";

const ApiComponent = () => {
	const [data, setData] = useState(''); // Initial empty array of data
	useEffect(() => {
		// Define the API endpoint
		const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json"; // Example API
		// Make an API request
		axios
			.get(apiUrl)
			.then((response) => {
				console.log("API Response:", response.data);
				setData(response.data); // Set the data in the state
			})
			.catch((error) => {
				console.error("API Error:", error);
			});
	}, []);

	return (
		<View>
			<Text>Check the console for API response</Text>
		</View>
	);
};

export default ApiComponent;
