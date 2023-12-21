const getBmiCalculator = async (req, res) => {
	const usernameInput = req.username;
	const roleInput = req.role;
	try {
		let workoutlist;
		if (roleInput === "user") {
			workoutlist = await req.db
				.collection("calculator")
				.find({ maker: usernameInput })
				.toArray();
		} else {
			workoutlist = await req.db.collection("calculator").find().toArray();
		}
		res.status(200).json({
			message: "Success Read All BMI List",
			data: workoutlist,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const bmiCalculator = async (req, res) => {
	try {
		const usernameInput = req.username;
		const { weight, height, age } = req.body;

		if (!weight || !height || !age) {
			return { index, error: "Please provide weight, height, and age." };
		}

		const weightInt = parseInt(weight, 10);
		const heightInt = parseInt(height, 10);
		const ageInt = parseInt(age, 10);

		const heightInMeters = height / 100;
		const bmi = weight / (heightInMeters * heightInMeters);

		let category;
		if (bmi < 18.5) {
			category = "Underweight";
		} else if (bmi < 24.9) {
			category = "Normal weight";
		} else if (bmi < 29.9) {
			category = "Overweight";
		} else {
			category = "Obese";
		}

		const newCalculate = await req.db.collection("calculator").insertOne({
			weight: weightInt,
			height: heightInt,
			age: ageInt,
			bmi,
			category,
			date: new Date(),
			maker: usernameInput,
		});

		res.status(200).json({
			ID: newCalculate.insertedId,
			message: `BMI Calculate Result`,
			data: newCalculate,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteBmiCalculator = async (req, res) => {
	const id = req.params.id;
	const usernameInput = req.username;
	try {
		const calculatorToDelete = await req.db
			.collection("calculator")
			.findOne({ _id: new ObjectId(id) });
		if (!calculatorToDelete) {
			return res.status(400).json({
				message: `Workout with ID ${id} not found.`,
			});
		}
		if (usernameInput === "user" && calculatorToDelete.maker !== "user") {
			return res.status(403).json({
				message: "Admin can only delete workouts made by admins.",
			});
		}
		await req.db.collection("calculator").deleteOne({ _id: new ObjectId(id) });
		res.status(200).json({
			message: `BMI with ID ${id} has been deleted successfully.`,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	bmiCalculator,
	getBmiCalculator,
	deleteBmiCalculator,
};
