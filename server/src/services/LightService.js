const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const model = require("../utils/constants/modelsConstants");
const db = require("../config/databaseConfig");

const lightService = {

    getAllLight: async () => {
        try {

            const query = `SELECT * FROM ${table.light_sensor}`;
            const result = await GlobalService.getAll(query, model.lightSensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getLightById: async (id) => {
        try {

            const query = `SELECT * FROM ${table.light_sensor} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, model.lightSensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getLightBySensorId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${table.light_sensor} WHERE sensor_id = '${id}'`;
                db.query(query, (error, result) => {
                    if (error || result.length === 0) {
                        reject(new Error("Capteur inexistante."));
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

module.exports = lightService;