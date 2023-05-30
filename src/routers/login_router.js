const express = require("express");
const { loginController } = require("../controllers/login_controller");
const {
  loginBodyValidatorMiddleware,
} = require("../middlewares/jwt_middleware");

const loginRouter = express.Router();

loginRouter.post("/", loginBodyValidatorMiddleware, loginController);

module.exports = loginRouter;
