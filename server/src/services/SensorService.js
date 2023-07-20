const GlobalService = require('./GlobalService');
const table = require('../utils/constants/tablesConstants');
const db = require('../config/databaseConfig');

const sensorService = {
    getSensorsByRoomId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${table.sensor} WHERE room_id = "${id}";`;
                db.query(query, (error, result) => {
                    if (error) {
                        reject(new Error(error));
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
