const { Router } = require("express");
const { bmiCalculator, getBmiCalculator } = require("../service/bmiCalculator");
const authenticationMiddleware = require("../middleware/authentication-middleware");

const bmiCalculatorRouter = Router();

bmiCalculatorRouter.get(
	"/bmicalculator",
	authenticationMiddleware,
	getBmiCalculator
);
bmiCalculatorRouter.post(
	"/bmicalculator",
	authenticationMiddleware,
	bmiCalculator
);
bmiCalculator.delete(
	"bmicalculator/:id",
	authenticationMiddleware,
	bmiCalculator
);

module.exports = bmiCalculatorRouter;
