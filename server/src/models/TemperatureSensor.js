class TemperatureSensor {

    constructor(sensor_id, temperature, date, data_id, room_id) {

        this.sensor_id = sensor_id;
        this.temperature = temperature;
        this.date = date;
        this.data_id = data_id;
        this.room_id = room_id;
    }
}

module.exports = TemperatureSensor;

