require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const databaseMiddleware = require("./middleware/database-middleware");
const { corsOptions } = require("./middleware/cors");
const userRouter = require("./routes/userRoutes");
const workoutRouter = require("./routes/workoutRoutes");
const dbConnection = require("./config/dbconfig");
const { applyHelmet } = require("./middleware/helmet");

const app = express();
dbConnection();
app.use(cors(corsOptions));
applyHelmet(app);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(databaseMiddleware);

app.get("/", (req, res) => {
	res.send("Workout App - Final Project");
});

app.use("/api", userRouter);
// app.use("/workout", workoutRouter);

app.listen(3000, () => console.log("Server is running on port 3000"));
