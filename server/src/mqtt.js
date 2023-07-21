const client = require('./config/mqttConfig');
const table = require('./utils/constants/tablesConstants');
const humidityService = require('./services/HumidityService');
const temperatureService = require('./services/TemperatureService');
const co2Service = require('./services/Co2Service');
const luminosityService = require('./services/LuminosityService');
const movingService = require('./services/MovingService');
const { tempAutomation, lightAutomation } = require('./utils/automation');

client.subscribe('groupe5/packet/9fa47c36-e52f-4698-b655-f7d5a8ce80a1/#');
client.subscribe('groupe5/packet/82710134-af42-4601-a129-0975b48a0e5c/#');
client.on('message', (topic, message) => {
    let sensorTable;
    let dataObj = JSON.parse(message.toString());
    let dataArray = topic.split('/', 5);
    // console.log(dataArray);

    switch (dataObj.sensor_id) {
        case 118:
            // sensorTable = table.luminosity_sensor;
            // console.log('lux ', dataObj);
            luminosityService.insertData(dataArray[3], dataObj.source_address, dataObj.data.lux);
            break;

        case 112:
            sensorTable = table.temperature_sensor;

            // tempAutomation(data);
            // console.log('temp ', dataObj);
            temperatureService.insertData(
                dataArray[3],
                dataObj.source_address,
                dataObj.data.temperature
            );
            break;

        case 114:
            // sensorTable = table.humidity_sensor;
            humidityService.insertData(dataArray[3], dataObj.source_address, dataObj.data.humidity);
            // console.log('humidity ', dataObj);
            break;

        case 115:
            // sensorTable = table.moving_sensor;
            // movingSsertDatervice.ina(dataArray[3], data.source_address, data.data.motion);

            // lightAutomation(data);
            // console.log('moving ', dataObj);
            movingService.insertData(dataArray[3], dataObj.source_address, dataObj.data.motion);
            break;

        case 131:
            //     sensorTable = table.co2_sensor;

            // console.log('co2 ', dataObj);
            co2Service.insertData(dataArray[3], dataObj.source_address, dataObj.data.co2);
        //     break;

        default:
            break;
    }
});

process.on('SIGINT', () => {
    client.end();
    process.exit();
});

module.exports = client;
