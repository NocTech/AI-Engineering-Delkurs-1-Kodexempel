const fs = require("fs");
const csv = require("csv-parser");

// Om ni hittar egna dataset, byt ut namnen nedan mot er .csv fil och namnet på den fil ni vill spara därefter.
const inputCsv = "housing.csv";
const outputJson = "housing.json";

const results = [];

fs.createReadStream(inputCsv)
	.pipe(csv())
	.on("data", (data) => results.push(data))
	.on("end", () => {
		fs.writeFile(outputJson, JSON.stringify(results, null, 2), (err) => {
			if (err) {
				console.error("Error writing JSON file:", err);
			} else {
				console.log(
					`Successfully converted CSV to JSON. Output saved to ${outputJson}`
				);
			}
		});
	});
