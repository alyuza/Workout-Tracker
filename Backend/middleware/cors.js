const corsOptions = {
	origin: [
		"http://localhost:5173",
		"https://workout-tracker-server-navy.vercel.app",
		"https://workout-tracker-server-navy.vercel.app/",
		"https://workout-tracker-server-navy.vercel.app/*"
	],
	methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
};

module.exports = { corsOptions };
