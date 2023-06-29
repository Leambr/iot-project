class HumiditySensor {

    constructor(sensor_id, humidity, date, data_id, room_id) {

        this.sensor_id = sensor_id;
        this.humidity = humidity;
        this.date = date;
        this.data_id = data_id;
        this.room_id = room_id;
    }
}

module.exports = HumiditySensor;
