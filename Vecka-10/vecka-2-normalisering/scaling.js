function normalizeData(data, key) {
	const values = data.map((row) => row[key]);

	const min = Math.min(...values);
	const max = Math.max(...values);

	return data.map((row) => {
		const newRow = { ...row };
		newRow[key] = (newRow[key] - min) / (max - min);
		return newRow;
	});
}
