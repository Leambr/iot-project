CREATE TABLE IF NOT EXISTS `users` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`username` VARCHAR(255),
	`password` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `automation` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`task_date` DATETIME,
	`type` ENUM('Lumière', 'Climatisation', 'Chauffage'),
	`is_done` BOOLEAN,
	`sensor_id` INT,
	CONSTRAINT fk_sensor_automation FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`type` ENUM(
		'Lumière',
		'Température',
		'Ventilation',
		'Mouvement',
		'Humidité',
		'Co2'
	),
	`room_id` INT,
	CONSTRAINT fk_sensor_room FOREIGN KEY (room_id) REFERENCES room(id) ON DELETE CASCADE ON UPDATE CASCADE
) CREATE TABLE IF NOT EXISTS `training_courses` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`day` ENUM(
		'Lundi',
		'Mardi',
		'Mercredi',
		'Jeudi',
		'Vendredi',
		'Samedi',
		'Dimanche'
	),
	`start_hour` DATETIME,
	`finish_hour` DATETIME,
	`sport_category` ENUM(
		'Yoga',
		'Pilates',
		'Abdos/Fessiers',
		'Stretching',
		'Strong'
	),
	`max_people` INT,
	`coach_name` VARCHAR(255),
	`is_canceled` BOOLEAN,
	`is_completed` BOOLEAN,
	`room_id` INT,
	CONSTRAINT fk_training_room FOREIGN KEY (room_id) REFERENCES room(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `rooms` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`name` ENUM(
		'Vestiaire homme',
		'Vestiaire femme',
		'Machines',
		'Abdos',
		'Cours commun',
		'Administration'
	)
);

CREATE TABLE IF NOT EXISTS `light_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` INT,
	`luminosity` INT,
	`ir` INT,
	`date` DATETIME,
	CONSTRAINT fk_light_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `moving_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` INT,
	`is_moving` BOOLEAN,
	`date` DATETIME,
	CONSTRAINT fk_moving_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `temperature_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` INT,
	`temperature` FLOAT,
	`date` DATETIME,
	CONSTRAINT fk_temperature_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `humidity_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` INT,
	`humidity` FLOAT,
	`date` DATETIME,
	CONSTRAINT fk_humidity_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `co2_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` INT,
	`co2` INT,
	`date` DATETIME,
	CONSTRAINT fk_co2_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE
);