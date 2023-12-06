const { ObjectId } = require("mongodb");
const Workout = require("../model/workout");

const getWorkout = async (req, res) => {
	const id = req.user.id;
	const role = req.user.role;

	try {
		let workouts;
		if (role === "admin") {
			workouts = await Workout.find().populate();
		}
	} catch {}
};
