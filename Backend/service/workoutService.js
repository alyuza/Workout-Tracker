const { ObjectId } = require("mongodb");

const getWorkout = async (req, res) => {
	const usernameInput = req.username; // Get username data from decoded token
	const roleInput = req.role; // Get role data from decoded token
	try {
		if (roleInput === "user") {
			const workoutlist = await req.db
				.collection("workouts")
				.find({ maker: usernameInput })
				.toArray();
			res.status(200).json({
				message: "Success Read All Workout List",
				data: workoutlist,
			});
		} else {
			const workoutlist = await req.db.collection("workouts").find().toArray();
			res.status(200).json({
				message: "Success Read All Workout LIst.",
				data: workoutlist,
			});
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const createWorkout = async (req, res) => {
	const usernameInput = req.username;
	try {
		const { title, description, distance, time, calorie } = req.body;
		const newWorkout = await req.db.collection("workouts").insertOne({
			title,
			description,
			distance,
			time,
			calorie,
			maker: usernameInput,
		});

		res.status(200).json({
			ID: newWorkout.insertedId,
			message: `Add Workout Success.`,
			data: newWorkout,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const updateWorkout = async (req, res) => {
	const id = req.params.id;
	const { title, description, distance, time, calorie } = req.body;
	const usernameInput = req.username;
	try {
		const workout = await db
			.collection("workouts")
			.findOne({ _id: new ObjectId(id) });
		if (!workout) {
			return res.status(400).json({
				message: `Workout with ID ${id} not found.`,
			});
		}
		// if (usernameInput === "admin" && task.maker !== "admin") {
		// 	return res.status(403).json({
		// 		message: "Admin can only edit tasks made by admins.",
		// 	});
		// }
		await db.collection("workouts").findOneAndUpdate(
			{ _id: new ObjectId(id) },
			{
				$set: {
					title,
					description,
					distance,
					time,
					calorie,
				},
			}
		);
		res.status(200).json({
			message: "Successfully Update Workout",
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteWorkout = async (req, res) => {
	const id = req.params.id;
	const usernameInput = req.username;
	try {
		const workoutToDelete = await db
			.collection("workouts")
			.findOne({ _id: new ObjectId(id) });
		if (!workoutToDelete) {
			return res.status(400).json({
				message: `Workout with ID ${id} not found.`,
			});
		}
		if (usernameInput === "admin" && taskToDelete.maker !== "admin") {
			return res.status(403).json({
				message: "Admin can only delete tasks made by admins.",
			});
		}
		await db.collection("workouts").deleteOne({ _id: new ObjectId(id) });
		res.status(200).json({
			message: `Workout with ID ${id} has been deleted successfully.`,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
