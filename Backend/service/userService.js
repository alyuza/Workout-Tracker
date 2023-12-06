const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const Permission = require("../model/permission");
const Users = require("../model/user");
const { JWT_SIGN } = require("../config/config");
const { generaterResetToken } = require("../middleware/uid");

const register = async (req, res) => {
	const { fullname, username, password } = req.body;
	try {
		const usernameValue = username.trim("");
		if (password.length < 6) {
			return false;
		}
		const alphanumericRegex = /[0-9a-zA-Z]/;
		if (!alphanumericRegex.test(password)) {
			return false;
		}
		if (usernameValue === " " || usernameValue === null) {
			res.status(400).json({
				message: "Username must be filled",
			});
		}
		if (!fullname) {
			return res.status.json(400)({
				message: "Fullname is required",
			});
		}
		const user = await Users.findOne({ username: usernameValue });
		if (user) {
			throw new Error("Username Already Exist");
		}
		const hashedPassword = await bcrypt.hash(password, 6);
		const newUser = new Users({
			fullname: fullname,
			username: usernameValue,
			password: hashedPassword,
			role: 'user'
		});
		await newUser.save();
		res.status(200).json({
			message: "User Successfully Registered",
			data: newUser,
		});
	} catch (error) {
		res.status(401).json({ error: error.message });
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await Users.findOne({ username }).populate("role");
		console.log(user);
		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (user) {
			if (isPasswordCorrect) {
				const token = jwt.sign({ username: user.username, role: user.role }, JWT_SIGN)
				res.status(200).json({
					message: 'Login Success.',
					data: token
				});
			} else {
				res.status(401).json({ error: "Password is incorrect" });
			}
		} else {
			res.status(401).json({ error: "User Not Found" });
		}
	} catch (error) {
		console.error("Internal Server Error:", error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

module.exports = {
	register,
	login
};
