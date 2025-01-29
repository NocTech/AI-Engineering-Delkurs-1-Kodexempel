fetch("./bostadspriser_dataset.json")
	.then((response) => response.json())
	.then(async (bostadsprisData) => {
		await runVisualization(bostadsprisData);
	});

async function runVisualization(data) {
	console.log("Data successfully loaded, data is: ", data);
	tfvis.visor().open();

	const cleanData = data;

	//console.log(cleanData);

	const roomPriceData = cleanData.map((d) => ({
		x: d.Antal_Sovrum,
		y: d.Pris_SEK,
	}));

	tfvis.render.scatterplot(
		{ name: "Antal sovrum vs Pris i SEK" },
		{ values: roomPriceData },
		{ xLabel: "Antal sovrum", yLabel: "Pris (SEK)", height: 300 }
	);

	const houseSizeData = cleanData.map((d) => ({
		x: d.Husstorlek_kvm,
		y: d.Pris_SEK,
	}));

	tfvis.render.scatterplot(
		{ name: "Husstorlek (KVM) vs Pris i SEK" },
		{ values: houseSizeData },
		{ xLabel: "Husstorlek (KVM)", yLabel: "Pris (SEK)", height: 300 }
	);

	const houseVsPriceData = cleanData.map((d) => ({
		x: d.Husstorlek_kvm,
		y: d.Antal_Sovrum,
	}));

	tfvis.render.scatterplot(
		{ name: "Husstorlek (KVM) vs Antal sovrum" },
		{ values: houseVsPriceData },
		{ xLabel: "Husstorlek (KVM)", yLabel: "Antal sovrum", height: 300 }
	);

	const featureName = "Stad";

	const cityCounts = cleanData.reduce((acc, row) => {
		acc[row[featureName]] = (acc[row[featureName]] || 0) + 1;
		return acc;
	}, {});

	const realData = Object.entries(cityCounts).map(([key, value]) => ({
		index: key,
		value: value,
	}));

	console.log(realData);

	tfvis.render.barchart({ name: "City Distribution" }, realData, {
		xLabel: "City",
		yLabel: "Count",
		height: 300,
	});
}
