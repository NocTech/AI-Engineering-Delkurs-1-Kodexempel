// Ladda in ert dataset som ni vill jobba med (byt ut iris.json)
fetch("./iris.json")
	.then((response) => response.json())
	.then(async (irisData) => {
		await runVisualization(irisData);
	});

async function runVisualization(data) {
	tfvis.visor().open();
	// Anropa funktioner som visar er data
	await showScatterPlot(data);
	await showHistogram(data);
	await showGeminiScatterPlot(data);
}

async function showGeminiScatterPlot(data) {
	const series = ["SepalLengthCm", "SepalWidthCm"]; // Välj de variabler du vill jämföra
	const values = data.map((d) => ({
		x: parseFloat(d[series[0]]),
		y: parseFloat(d[series[1]]),
	}));

	const surface = tfvis
		.visor()
		.surface({ name: "Sepal Length vs Sepal Width", tab: "Charts" });
	tfvis.render.scatterplot(
		surface,
		{ values },
		{
			xLabel: series[0],
			yLabel: series[1],
		}
	);
}

async function showHistogram(data) {
	const featureName = "SepalLengthCm";
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
