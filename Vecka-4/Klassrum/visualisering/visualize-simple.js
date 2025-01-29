// Ladda in ert dataset som ni vill jobba med (byt ut iris.json)
fetch("./housing.json")
	.then((response) => response.json())
	.then(async (irisData) => {
		await runVisualization(irisData);
	});

async function runVisualization(data) {
	tfvis.visor().open();
	// Anropa funktioner som visar er data
	//await showScatterPlot(data);
	await showHistogram(data);
}

async function showHistogram(data) {
	const featureName = "median_income";
	const values = data.map((row) => parseFloat(row[featureName]));
	tfvis.render.histogram({ name: `${featureName} distribution` }, values, {
		xLabel: featureName,
		yLabel: "Count",
		height: 200,
	});
}

function getScatterValuesBySpecies(data, xFeature, yFeature, speciesName) {
	return data
		.filter((row) => row["Species"] === speciesName)
		.map((row) => ({
			x: parseFloat(row[xFeature]),
			y: parseFloat(row[yFeature]),
		}));
}

async function showScatterPlot(data) {
	const setosaSLPL = getScatterValuesBySpecies(
		data,
		"SepalLengthCm",
		"PetalLengthCm",
		"Iris-setosa"
	);
	const versicolorSLPL = getScatterValuesBySpecies(
		data,
		"SepalLengthCm",
		"PetalLengthCm",
		"Iris-versicolor"
	);
	const virginicaSLPL = getScatterValuesBySpecies(
		data,
		"SepalLengthCm",
		"PetalLengthCm",
		"Iris-virginica"
	);

	tfvis.render.scatterplot(
		{ name: "Sepal length vs Petal length" },
		{
			values: [setosaSLPL, versicolorSLPL, virginicaSLPL],
			series: ["Setosa", "Versiocolr", "Virginica"],
		},
		{ xLabel: "Sepal length cm", yLabel: "Petal length cm", height: 300 }
	);
}
