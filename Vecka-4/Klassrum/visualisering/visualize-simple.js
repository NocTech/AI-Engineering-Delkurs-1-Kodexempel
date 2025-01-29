// Ladda in ert dataset som ni vill jobba med (byt ut iris.json)
fetch("./iris.json")
	.then((response) => response.json())
	.then(async (irisData) => {
		await runVisualization(irisData);
	});

async function runVisualization(data) {
	tfvis.visor().open();
	// Anropa funktioner som visar er data
	/* await showScatterPlot(data);
	await showHistogram(data); */
}
