const apiUrl = "https://catfact.ninja/fact";

fetch(apiUrl)
	.then((response) => {
		console.log(response);
		if (!response.ok) {
			console.log("Something went wrong!", response.status);
			throw new Error("HTTP fel, status: ", response.status);
		}
		return response.json();
	})
	.then((data) => {
		console.log("Cat fact is :", data.fact);
		console.log("Length of the cat fact is: ", data.length);
	})
	.catch((error) => {
		console.log("There was an error: ", error);
	});
