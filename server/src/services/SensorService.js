const GlobalService = require('./GlobalService');
const table = require('../utils/constants/tablesConstants');
const db = require('../config/databaseConfig');

const sensorService = {
    getSensorsByRoomId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `
                SELECT
                r.name AS room_name,
                ls.sensor_id AS light_sensor_id,
                ts.sensor_id AS temperature_sensor_id,
                ms.sensor_id AS moving_sensor_id,
                hs.sensor_id AS humidity_sensor_id,
                cs.sensor_id AS co2_sensor_id
                FROM
                ${table.rooms} r
                LEFT JOIN
                light_sensor ls ON r.id = ${id}
                LEFT JOIN
                temperature_sensor ts ON r.id = ${id}
                LEFT JOIN
                moving_sensor ms ON r.id = ${id}
                LEFT JOIN
                humidity_sensor hs ON r.id = ${id}
                LEFT JOIN
                co2_sensor cs ON r.id = ${id};`;
                // const query = `SELECT * FROM ${table.rooms} WHERE id = ${id}`;
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
