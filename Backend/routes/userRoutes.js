const { Router } = require("express");
const { register, login, logout } = require("../service/userService");
const LoginLimiter = require("../middleware/rateLimit");

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", LoginLimiter, login);
userRouter.post("/logout", logout);

module.exports = userRouter;
