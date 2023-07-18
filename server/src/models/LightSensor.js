class Co2Sensor {

    constructor(sensor_id, co2, ir, date, data_id, room_id) {

        this.sensor_id = sensor_id;
        this.co2 = co2;
        this.ir = ir;
        this.date = date;
        this.data_id = data_id;
        this.room_id = room_id;
    }
}

module.exports = Co2Sensor;
