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
      console.log(query);

      return new Promise((resolve, reject) => {

        const ModelClass = require(`../models/User`);
        const model = new ModelClass();
        Object.assign(model, user);

        const missingProps = Object.keys(model).filter(
          (prop) => model[prop] === undefined
        );

        if (missingProps.length > 0) {
          reject(
            new Error(
              `Données manquantes pour les propriétés : ${missingProps.join(", ")}`
            )
          );
        } else {
          db.query(query, user, (error, result) => {
            if (error) {
              reject(error);
            } else {

              if (result.length > 0) {

                return result;
              }
              return false;

              // throw "Aucun enregistrement trouvé.";

              // const userId = result.insertId;
              // const query = `SELECT * FROM ${table} WHERE id = ${userId}`;
              // const postSend = getById(query, modelName, userId);
              // resolve(postSend);
            }
          });
        }
      })



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
  }
};

module.exports = userService;
