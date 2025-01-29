function oneHotEncode(data, key) {
	const uniqueValues = [...new Set(data.map((row) => row[key]))];
	return data.map((row) => {
		const newRow = { ...row };

		uniqueValues.forEach((val) => {
			newRow[`${key}_${val}`] = row[key] === val ? 1 : 0;
		});

		delete newRow[key];
		return newRow;
	});
}
