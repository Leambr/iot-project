class TrainingCourses {
    constructor(
        id,
        day,
        start_hour,
        finish_hour,
        sport_category,
        max_people,
        coach_name,
        is_canceled,
        is_completed,
        room_id
    ) {
        this.id = id;
        this.day = day;
        this.start_hour = start_hour;
        this.finish_hour = finish_hour;
        this.sport_category = sport_category;
        this.max_people = max_people;
        this.coach_name = coach_name;
        this.is_canceled = is_canceled;
        this.is_completed = is_completed;
        this.room_id = room_id;
    }
}

module.exports = TrainingCourses;
