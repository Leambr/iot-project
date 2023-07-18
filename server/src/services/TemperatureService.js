const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const model = require("../utils/constants/modelsConstants");
const db = require("../config/databaseConfig");

const temperatureService = {

    getAllTemperature: async () => {
        try {
            console.log('service');
            const query = `SELECT * FROM ${table.temperature_sensor}`;
            const result = await GlobalService.getAll(query, model.temperatureSensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getTemperatureById: async (id) => {
        try {

            const query = `SELECT * FROM ${table.temperature_sensor} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, model.temperatureSensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getTemperatureBySensorId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${table.temperature_sensor} WHERE sensor_id = '${id}'`;
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

module.exports = temperatureService;