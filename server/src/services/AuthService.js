const GlobalService = require("./GlobalService");
const db = require("../config/databaseConfig");
const table = require("../utils/constants/tablesConstants");

const authService = {
  login: async (login) => {
    try {
      return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${table.users} WHERE username = '${login.username}'`;
        db.query(query, (error, result) => {
          if (error || result.length === 0) {
            reject(new Error("Identifiants inexistant."));
          } else {
            const password = result[0].password;
            password !== login.password ? reject(new Error("Mot de passe incorrect.")) : resolve(result);
          }
        });
      });
    } catch (error) {
      throw error;
    }
  },
};

module.exports = authService;
