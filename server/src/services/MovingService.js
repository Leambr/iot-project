const GlobalService = require('./GlobalService');
const table = require('../utils/constants/tablesConstants');
const model = require('../utils/constants/modelsConstants');
const db = require('../config/databaseConfig');

const movingService = {
    getAllMoving: async () => {
        try {
            const query = `SELECT * FROM ${table.moving_sensor}`;
            const result = await GlobalService.getAll(query, model.movingSensorModel);
            return result;
        } catch (error) {
            throw error;
        }
    },

    getMovingById: async (id) => {
        try {
            const query = `SELECT * FROM ${table.moving_sensor} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, model.movingSensorModel);
            return result;
        } catch (error) {
            throw error;
        }
    },

    getMovingBySensorId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${table.moving_sensor} WHERE sensor_id = '${id}'`;
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
};

module.exports = movingService;
