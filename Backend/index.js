require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const databaseMiddleware = require("./middleware/database-middleware");
const { applyCors } = require("./middleware/cors");

const app = express();
applyCors(app);
applyHelmet(app);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(databaseMiddleware);

app.get("/", (req, res) => {
	res.send("Workout App - Final Project");
});

app.use("/user");
app.use("/workout");

app.listen(3000, () => console.log("Server is running on port 3000"));
