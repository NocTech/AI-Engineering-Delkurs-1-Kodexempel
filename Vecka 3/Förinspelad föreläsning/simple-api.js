const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(apiUrl)
	.then((response) => {
		//console.log(response);
		if (!response.ok) {
			throw new Error("HTTP-fel: Status: ", response.title);
		}
		return response.json();
	})
	.then((data) => {
		//console.log("API-response: ", data);
		const bitcoinPriceUSD = data.bpi.USD.rate;
		console.log(`Det nuvarande priset för bitcoin i USD är ${bitcoinPriceUSD}`);
	});
