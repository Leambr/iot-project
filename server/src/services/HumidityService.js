const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const model = require("../utils/constants/modelsConstants");
const db = require("../config/databaseConfig");

const humidityService = {

    getAllHumidity: async () => {
        try {
            console.log('service');
            const query = `SELECT * FROM ${table.humidity_sensor}`;
            const result = await GlobalService.getAll(query, model.humiditySensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getHumidityById: async (id) => {
        try {

            const query = `SELECT * FROM ${table.humidity_sensor} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, model.humiditySensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getHumidityBySensorId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${table.humidity_sensor} WHERE sensor_id = '${id}'`;
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

module.exports = humidityService;