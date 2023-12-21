const corsOptions = {
	origin: [
		"http://localhost:5173",
		"http://localhost:3000",
		"http://localhost:3000/*",
		"https://upset-pocket-lion.cyclic.app/",
		"https://upset-pocket-lion.cyclic.app/*",
		"https://workout-tracker-iy79.vercel.app/",
		"https://workout-tracker-iy79.vercel.app/*"
	],
	methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
};

module.exports = { corsOptions };
