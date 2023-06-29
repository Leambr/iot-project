const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const db = require("../config/databaseConfig");

const sensorService = {

    getSensorsByRoomId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query =
                    `SELECT * FROM ${table.light_sensor} WHERE room_id = ${id}
                    LEFT JOIN ${table.humidity_sensor} ON ${table.humidity_sensor}.room_id = ${id}
                    LEFT JOIN ${table.moving_sensor} ON ${table.moving_sensor}.room_id = ${id}
                    LEFT JOIN ${table.temperature} ON ${table.temperature}.room_id = ${id}
                    LEFT JOIN ${table.co2_sensor} ON ${table.co2_sensor}.room_id = ${id}`
                    ;
                db.query(query, (error, result) => {
                    if (error) {
                        reject(new Error(error));
                    } else {
                        resolve(result)
                    }
                });
            });
        } catch (error) {
            throw error;
        }

    },
};

module.exports = userService;
