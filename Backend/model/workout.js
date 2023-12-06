const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	// type: {
	// 	type: String,
	// 	enum: [
	// 		"Running",
	// 		"Cycling",
	// 		"Swimming",
	// 		"BMI Calculator",
	// 		"Nutrition Tips",
	// 	],
	// 	required: true,
	// },
	distance: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
		required: true,
	},
	caloriesBurned: {
		type: Number,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users",
		required: true,
	},
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
