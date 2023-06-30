const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const model = require("../utils/constants/modelsConstants");
const db = require("../config/databaseConfig");

const sensorService = {

    getAllSensors: async () => {
        try {

            const query = `SELECT * FROM ${table.sensor}`;
            const result = await GlobalService.getAll(query, model.sensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getSensorById: async (id) => {
        try {

            const query = `SELECT * FROM ${table.sensor} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, model.sensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getSensorsByRoomId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
              const query = `SELECT * FROM ${table.sensor} WHERE room_id = '${id}'`;
              db.query(query, (error, result) => {
                if (error || result.length === 0) {
                  reject(new Error("Salle inexistante."));
                } else {
                  resolve(result);
                }
              });
            });
          } catch (error) {

            throw error;
        }
    },

};

module.exports = sensorService;