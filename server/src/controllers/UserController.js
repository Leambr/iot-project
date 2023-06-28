const userService = require("../services/UserService");
const responseFormatter = require("../utils/responseFormatter");

const userController = {
  getAllUsers: async (_, res) => {
    try {
      const users = await userService.getAllUsers();
      const response = responseFormatter.formatResponse(res.statusCode, users);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      const response = responseFormatter.formatResponse(res.statusCode, user);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {

    try {

      const user = await userService.login(req.body);
      const response = responseFormatter.formatResponse(res.statusCode, user);

      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = userController;
