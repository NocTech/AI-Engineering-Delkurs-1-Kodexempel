function loadDataset(callback) {
	fetch("bostadspriser_dataset.json")
		.then((response) => response.json())
		.then((data) => callback(data))
		.catch((error) => console.error("Det gick inte att ladda datan tyvärr."));
}
