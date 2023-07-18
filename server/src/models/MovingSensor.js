class MovingSensor {
    constructor(id, sensor_id, is_moving, date) {
        this.id = id;
        this.sensor_id = sensor_id;
        this.is_moving = is_moving;
        this.date = date;
    }
}

module.exports = MovingSensor;
