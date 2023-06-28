const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const db = require("../config/databaseConfig");

const userService = {
  getAllUsers: async () => {
    try {
      const query = `SELECT * FROM ${table.users}`;
      const result = await GlobalService.getAll(query, "User");
      return result;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (id) => {
    try {
      const query = `SELECT * FROM ${table.users} WHERE id = ${id}`;
      const result = await GlobalService.getById(query, "User");
      return result;
    } catch (error) {
      throw error;
    }
  },

  createUser: async (user) => {
    try {

      const query = `INSERT INTO ${table.users} (username, password) VALUES ('${user.username}', '${user.password}')`;
      const result = await GlobalService.create(
        query,
        "User",
        user,
        table.users
      );
      return result;
    } catch (error) {

      throw error;
    }
  },

  login: async (user) => {

    try {

      const query = `SELECT * FROM users WHERE username = '${user.username}' AND password = '${user.password}'`;

      const result = await GlobalService.login(
        query,
        "User",
        user,
        table.users
      );
      return result;
    }
    catch (error) {

      throw error;
    }
  }
};

module.exports = userService;
