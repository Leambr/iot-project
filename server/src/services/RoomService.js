const GlobalService = require('./GlobalService');
const table = require('../utils/constants/tablesConstants');
const db = require('../config/databaseConfig');

const roomService = {
    getAllRooms: async () => {
        try {
            const query = `SELECT * FROM ${table.rooms}`;
            const result = await GlobalService.getAll(query, 'Room');
            return result;
        } catch (error) {
            throw error;
        }
    },
    getRoomById: async (id) => {
        try {
            const query = `SELECT * FROM ${table.rooms} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, 'Room');
            return result;
        } catch (error) {
            throw error;
        }
    },

    getSensorsDataByRoomById: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `
                SELECT 
                    rooms.name AS room_name,
                    luminosity_sensor.luminosity,
                    moving_sensor.is_moving,
                    temperature_sensor.temperature,
                    humidity_sensor.humidity,
                    co2_sensor.co2,
                    voltage_sensor.kwh AS voltage,
                    person_sensor.person,
                    light_sensor.is_light,
                    vent_sensor.is_vent,
                    heat_sensor.is_heat
                FROM rooms
                LEFT JOIN luminosity_sensor ON luminosity_sensor.room_id = rooms.id
                LEFT JOIN moving_sensor ON moving_sensor.room_id = rooms.id
                LEFT JOIN temperature_sensor ON temperature_sensor.room_id = rooms.id
                LEFT JOIN humidity_sensor ON humidity_sensor.room_id = rooms.id
                LEFT JOIN co2_sensor ON co2_sensor.room_id = rooms.id
                LEFT JOIN voltage_sensor ON voltage_sensor.room_id = rooms.id
                LEFT JOIN person_sensor ON person_sensor.room_id = rooms.id
                LEFT JOIN light_sensor ON light_sensor.room_id = rooms.id
                LEFT JOIN vent_sensor ON vent_sensor.room_id = rooms.id
                LEFT JOIN heat_sensor ON heat_sensor.room_id = rooms.id
                WHERE rooms.id = "${id}";
                `;
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

module.exports = roomService;
