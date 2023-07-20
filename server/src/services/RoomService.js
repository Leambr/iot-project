const GlobalService = require('./GlobalService');
const table = require('../utils/constants/tablesConstants');
const db = require('../config/databaseConfig');
const client = require('../config/mqttConfig');

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
                    MAX(luminosity_sensor.luminosity) AS luminosity,
                    MAX(moving_sensor.is_moving) AS is_moving,
                    MAX(temperature_sensor.temperature) AS temperature,
                    MAX(humidity_sensor.humidity) AS humidity,
                    MAX(co2_sensor.co2) AS co2,
                    MAX(voltage_sensor.kwh) AS voltage,
                    MAX(person_sensor.person) AS person,
                    MAX(light_sensor.is_light) AS is_light,
                    MAX(vent_sensor.is_vent) AS is_vent,
                    MAX(heat_sensor.is_heat) AS is_heat
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
                WHERE rooms.id = "${id}"
                GROUP BY rooms.name;
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

    getMqttSensorsDataByRoomById: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                console.log(id);

                const data = {
                    rooms_name: '',
                    luminosity: 0,
                    is_moving: 0,
                    temperature: 0,
                    humidity: 0,
                    co2: 0,
                    voltage: 0,
                    person: 0,
                    is_light: 0,
                    is_vent: 0,
                    is_heat: 0,
                };

                // Liste des capteurs à recevoir
                const sensorsToReceive = [
                    { sensor_id: 118, field: 'luminosity', valueKey: 'lux' },
                    { sensor_id: 115, field: 'is_moving', valueKey: 'motion' },
                    { sensor_id: 112, field: 'temperature', valueKey: 'temperature' },
                    { sensor_id: 114, field: 'humidity', valueKey: 'humidity' },
                    { sensor_id: 131, field: 'co2', valueKey: 'co2' },
                    { sensor_id: 128, field: 'voltage', valueKey: 'kwh' },
                    { sensor_id: 100, field: 'person', valueKey: 'persons' },
                    { sensor_id: 104, field: 'is_light', valueKey: 'light' },
                    { sensor_id: 103, field: 'is_vent', valueKey: 'vent' },
                    { sensor_id: 104, field: 'is_heat', valueKey: 'heat' },
                ];

                let sensorsReceived = 0;

                const handleSensorData = (sensor, value) => {
                    const fieldData = sensorsToReceive.find((s) => s.sensor_id === sensor);
                    if (fieldData) {
                        data[fieldData.field] = value[fieldData.valueKey];
                    }

                    sensorsReceived++;

                    if (sensorsReceived === sensorsToReceive.length) {
                        // Arrête l'écoute pour ne pas attendre d'autres messages
                        client.unsubscribe(`groupe5/packet/${id}/#`);
                        resolve(data);
                    }
                };

                client.subscribe(`groupe5/packet/${id}/#`);

                client.on('message', (topic, message) => {
                    const topicArray = topic.split('/');
                    const sensor = topicArray[3];
                    const value = JSON.parse(message.toString());
                    console.log(topicArray);
                    console.log(value);
                    handleSensorData(value.sensor_id, value.data);
                    data.rooms_name = topicArray[2];
                });
            });
        } catch (error) {
            throw error;
        }
    },
};

module.exports = roomService;
