const { Router } = require("express");
const { bmiCalculator } = require("../service/bmiCalculator");
const authenticationMiddleware = require("../middleware/authentication-middleware");

const bmiCalculatorRouter = Router();

bmiCalculatorRouter.post(
	"/bmicalculator",
	authenticationMiddleware,
	bmiCalculator
);

module.exports = bmiCalculatorRouter;
