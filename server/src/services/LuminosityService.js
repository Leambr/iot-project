const GlobalService = require('./GlobalService');
const table = require('../utils/constants/tablesConstants');
const model = require('../utils/constants/modelsConstants');
const db = require('../config/databaseConfig');

const luminosityService = {
    getAllLuminosity: async () => {
        try {
            const query = `SELECT * FROM ${table.luminosity_sensor} WHERE`;
            const result = await GlobalService.getAll(query, model.luminositySensorModel);
            return result;
        } catch (error) {
            throw error;
        }
    },

    getLuminosityById: async (id) => {
        try {
            const query = `SELECT * FROM ${table.luminosity_sensor} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, model.luminositySensorModel);
            return result;
        } catch (error) {
            throw error;
        }
    },

    getLuminosityBySensorId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${table.luminosity_sensor} WHERE sensor_id = '${id}'`;
                db.query(query, (error, result) => {
                    if (error || result.length === 0) {
                        reject(new Error('Capteur inexistante.'));
                    } else {
                        resolve(result);
                    }
                });
            });
        } catch (error) {
            throw error;
        }
    },
    insertData: async (nodeId, source_address, data) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `INSERT INTO ${table.luminosity_sensor} (sensor_id, room_id, luminosity) VALUES ('${nodeId}', '${source_address}', ${data})`;
                db.query(query, data, (error, result) => {
                    if (error) {
                        console.log(error);
                        reject(new Error('Capteur inexistante.'));
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

module.exports = luminosityService;
