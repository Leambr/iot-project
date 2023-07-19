
const client = require('./config/mqttConfig');
const table = require("./utils/constants/tablesConstants");
const humidityService = require("./services/HumidityService")
const temperatureService = require("./services/TemperatureService")
const co2Service = require("./services/Co2Service")
const lightService = require("./services/LightService")
const movingService = require("./services/MovingService")

client.subscribe('groupe5/#')

client.on('message', (topic, message) => {

    let sensorTable;
    let data = JSON.parse(message.toString())

    switch (data.sensor_id) {

        case 118:
            sensorTable = table.light_sensor

            lightService.insertData(data, sensorTable)
            break

        case 112:
            sensorTable = table.temperature_sensor
            temperatureService.insertData(data, sensorTable)
            break

        case 114:
            sensorTable = table.humidity_sensor
            humidityService.insertData(data, sensorTable)
            break

        case 115:
            sensorTable = table.moving_sensor
            movingService.insertData(data, sensorTable)
            break

        case 131:
            sensorTable = table.co2_sensor
            co2Service.insertData(data, sensorTable)
            break

        default:
            break
    }
})

process.on('SIGINT', () => {
    client.end();
    process.exit();
});

module.exports = client;
