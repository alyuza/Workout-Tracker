const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Permission = require("../model/permission");
const Users = require("../model/user");
const { JWT_SIGN } = require("../config/config");
const { generaterResetToken } = require("../middleware/uid");



const register = async (req, res) => {
    const { name, username, password } = req.body;
    try {
        const usernameValue = username.trim("");
        if (password.length < 6) {
            return false;
        }
        const alphanumericRegex = /[0-9a-zA-Z]/;
        if (!alphanumericRegex.test(password)) {
            return false;
        }
    }
} catch
