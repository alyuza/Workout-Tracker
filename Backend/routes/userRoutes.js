const { Router } = require("express");
const { register, login } = require("../service/userService");
const LoginLimiter = require("../middleware/rateLimit");

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", LoginLimiter, login);

module.exports = userRouter;
