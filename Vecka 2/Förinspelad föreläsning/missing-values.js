function removeAllRowsWithMissingValues(data, key) {
	return data.filter((row) =>
		Object.values(row).every((value) => value !== null)
	);
}

function imputeMean(data) {
	const meanValues = {};

	const keys = Object.keys(data[0]);

	keys.forEach((key) => {
		const values = data
			.map((row) => row[key])
			.filter((value) => value !== null && typeof value === "number");

		if (values.length === 0) {
			console.error("No numeric data found for key: ", key);
		}

		const mean = values.reduce((sum, val) => sum + val, 0) / values.length;

		meanValues[key] = mean;
	});

	return data.map((row) => {
		const newRow = { ...row };

		keys.forEach((key) => {
			if (newRow[key] === null && typeof meanValues[key] === "number") {
				newRow[key] = meanValues[key];
			}
		});

		return newRow;
	});
}
