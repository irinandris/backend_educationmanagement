const { loginService } = require("../services/login_service");

module.exports = {
  loginController: (req, res, next) => {
    const { username, password } = req.body;
    const user = loginService(username, password);
    if (!user)
      return res
        .status(404)
        .json({ status: 404, message: "can not find the user" });
    return res.send(user);
  },
};
