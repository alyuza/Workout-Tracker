const { ObjectId } = require("mongodb");
const Workout = require("../model/workout");

const getWorkout = async (req, res) => {
	const id = req.user.id;
	const role = req.user.role;

	try {
		let workouts;
		if (role === "admin") {
			workouts = await Workout.find().populate();
		} else if (role === "user") {
			workouts = await Workout.find({ createdBy: id });
		}
		return res.status(200).json({ message: "Workout Details", workouts });
	} catch (error) {
		console.error("Internal Server Error:", error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

const createWorkout = async (req, res) => {
	const { title, description, distance, time, calorie } = req.body;

	try {
		const newWorkout = new Workout({
			title,
			description,
			distance,
			time,
			calorie,
		});
		await newWorkout.save();
		req.status(200).json({
			message: "Workout Done",
			data: newWorkout,
		});
	} catch (error) {
		res.status(401).json({ error: error.message });
	}
};

const updateWorkout = async (req, res) => {
	try {
		const id = req.params.id;
		const { title, description, distance, time, calorie } = req.body;

		const workout = await Workout.findById(id);
		if (!workout) {
			return res.status(404).json({ message: "Workout didn't exist " });
		}

		const updatedWorkout = await Workout.findOneAndUpdate(
			{ _id: id },
			{ title, description, distance, time, calorie },
			{ new: true }
		);

		res.status(200).json({
			message: "Workout successfully updated",
			data: updatedWorkout,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error updating Workout" });
	}
};

const deleteWorkout = async (req, res) => {
	const { id } = req.params;
	// const userId = req.user.id;
	// const role = req.user.role;

	try {
		const workout = await Workout.findById(id);
		console.log(id);
		if (!workout) {
			return res.status(404).json({ message: "Workout is not exist" });
		}
		// if (todo.createdBy.toString() !== userId && role !== "admin") {
		// 	return res
		// 		.status(403)
		// 		.json({ message: "Only Admin and Creator can Delete task" });
		// }
		await Workout.deleteOne({ _id: id });
		return res.status(200).json({ message: "Workout Deleted Successfully" });
	} catch (error) {
		console.error("Internal Server Error:", error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

module.exports = {
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
