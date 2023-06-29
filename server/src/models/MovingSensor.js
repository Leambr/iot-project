class MovingSensor {

    constructor(sensor_id, is_moving, date, data_id, room_id) {

        this.sensor_id = sensor_id;
        this.is_moving = is_moving;
        this.date = date;
        this.data_id = data_id;
        this.room_id = room_id;
    }
}

module.exports = MovingSensor;
