const { Router } = require("express");
const {
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
} = require("../service/workoutService");
const authenticationMiddleware = require("../middleware/authentication-middleware");

const workoutRouter = Router();

workoutRouter.get("/tasks", authenticationMiddleware, getWorkout);
workoutRouter.post("/tasks", authenticationMiddleware, createWorkout);
workoutRouter.put("/tasks/:id", authenticationMiddleware, updateWorkout);
workoutRouter.delete("/tasks/:id", authenticationMiddleware, deleteWorkout);

module.exports = workoutRouter;
