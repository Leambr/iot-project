const authService = require("../services/AuthService");
const responseFormatter = require("../utils/responseFormatter");
const jwtHelper = require("../utils/helper/jwtHelper");

const authController = {
  login: async (req, res) => {
    try {
      const login = await authService.login(req.body);

      const userId = login[0].id;
      const username = login[0].username;

      const payload = {
        id: userId,
        username: username,
      };

      if (login) {
        const token =
          username +
          "Bearer" +
          " " +
          jwtHelper.generateToken(payload);

        res.json(
          responseFormatter.authFormatResponse(
            res.statusCode,
            username,
            token
          )
        );
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = authController;
