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
}

async function showHistogram(data) {
	const featureName = "SepalLengthCm";
	const values = data.map((row) => parseFloat(row[featureName]));
	tfvis.render.histogram(
		{ name: `${featureName} Distribution`, tab: "Data Exploration" },
		values,
		{
			xLabel: featureName,
			yLabel: "Count",
			height: 200,
		}
	);
}

async function showScatterPlot(data) {
	function getScatterValuesBySpecies(xFeature, yFeature, speciesName) {
		return data
			.filter((row) => row["Species"] === speciesName)
			.map((row) => ({
				x: parseFloat(row[xFeature]),
				y: parseFloat(row[yFeature]),
			}));
	}

	const setosaSLPL = getScatterValuesBySpecies(
		"SepalLengthCm",
		"PetalLengthCm",
		"Iris-setosa"
	);
	const versicolorSLPL = getScatterValuesBySpecies(
		"SepalLengthCm",
		"PetalLengthCm",
		"Iris-versicolor"
	);
	const virginicaSLPL = getScatterValuesBySpecies(
		"SepalLengthCm",
		"PetalLengthCm",
		"Iris-virginica"
	);

	tfvis.render.scatterplot(
		{ name: "Sepal Length vs Petal Length", tab: "Data Exploration" },
		{
			values: [setosaSLPL, versicolorSLPL, virginicaSLPL],
			series: ["Setosa", "Versicolor", "Virginica"],
		},
		{
			xLabel: "Sepal Length (cm)",
			yLabel: "Petal Length (cm)",
			height: 200,
		}
	);
}
