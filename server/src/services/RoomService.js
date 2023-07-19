const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const db = require("../config/databaseConfig");

const roomService = {

    getAllRooms: async () => {
        try {

            const query = `SELECT * FROM ${table.rooms}`;
            const result = await GlobalService.getAll(query, "Room");
            return result;
        }
        catch (error) {

            throw error;
        }
    },
    getRoomById: async (id) => {

        try {

            const query = `SELECT * FROM ${table.rooms} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, "Room");

            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getSensorsByRoomId: async (roomId) => {

        const sensorTypes = ['light_sensor', 'moving_sensor', 'temperature_sensor', 'co2_sensor', 'humidity_sensor'];
        const data = [];

        try {
            for (const sensorType of sensorTypes) {
                const query = `SELECT * FROM ${sensorType} WHERE room_id = '${roomId}' AND date = (
                    SELECT MAX(date) FROM ${sensorType} WHERE room_id = '${roomId}'
                )`;

                const response = await new Promise((resolve, reject) => {
                    console.log(query);

                    db.query(query, [roomId], (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (result.length === 0) {
                                console.log('aucun enregistrement trouvé pour', sensorType);
                                resolve([]);
                            } else {
                                resolve(result);
                            }
                        }
                    });
                });

                data.push(...response); // Spread the response array elements into 'data'
            }

            return data; // Return a single array containing all sensor data objects
        } catch (error) {
            throw error;
        }
    }
};

module.exports = roomService;