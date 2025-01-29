// Ladda in ert dataset som ni vill jobba med (byt ut iris.json)
fetch("./student_lifestyle_dataset.json")
	.then((response) => response.json())
	.then(async (irisData) => {
		await runVisualization(irisData);
	});

async function runVisualization(data) {
	tfvis.visor().open();
	// Anropa funktioner som visar er data
	createStudentVisualization(data);
	createStressActivityVisualization(data);
}

async function createStudentVisualization(data) {
	// Prepare data for scatter plot - Study Hours vs GPA
	const studyGPAData = data.map((row) => ({
		x: parseFloat(row.Study_Hours_Per_Day),
		y: parseFloat(row.GPA),
	}));

	// Render scatter plot
	await tfvis.render.scatterplot(
		{ name: "Study Hours vs GPA", tab: "Student Analysis" },
		{ values: studyGPAData },
		{
			xLabel: "Study Hours Per Day",
			yLabel: "GPA",
			height: 300,
			fontSize: 16,
		}
	);

	const studyActivity = data.map((row) => ({
		x: parseFloat(row.Physical_Activity_Hours_Per_Day),
		y: parseFloat(row.GPA),
	}));

	// Render scatter plot
	await tfvis.render.scatterplot(
		{ name: "Activity vs GPA", tab: "Student Analysis" },
		{ values: studyActivity },
		{
			xLabel: "Physical activity hours per day",
			yLabel: "GPA",
			height: 300,
			fontSize: 16,
		}
	);

	const activityAndSleep = data.map((row) => ({
		x: parseFloat(row.Physical_Activity_Hours_Per_Day),
		y: parseFloat(row.Sleep_Hours_Per_Day),
	}));

	// Render scatter plot
	await tfvis.render.scatterplot(
		{ name: "Activity vs Sleep", tab: "Student Analysis" },
		{ values: activityAndSleep },
		{
			xLabel: "Physical activity hours per day",
			yLabel: "Sleep hours per day",
			height: 300,
			fontSize: 16,
		}
	);
}

async function createStressActivityVisualization(data) {
	// Convert stress levels to numerical values
	const stressMap = {
		Low: 1,
		Moderate: 2,
		High: 3,
	};

	const stressAndPhysical = data.map((row) => ({
		x: parseFloat(row.Physical_Activity_Hours_Per_Day),
		y: stressMap[row.Stress_Level],
	}));

	console.log(stressAndPhysical);

	// Render scatter plot
	await tfvis.render.scatterplot(
		{ name: "Activity vs Stress", tab: "Student Analysis" },
		{ values: stressAndPhysical },
		{
			xLabel: "Physical activity hours per day",
			yLabel: "Stress level (1=Low, 2=Moderate, 3=High)",
			height: 300,
		}
	);
}
