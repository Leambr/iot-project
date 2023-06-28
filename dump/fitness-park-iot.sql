CREATE TABLE IF NOT EXISTS `users` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`username` VARCHAR(255),
	`password` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `automation` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`task_date` DATETIME,
	`type` ENUM('Lumière', 'Climatisation', 'Chauffage')
);

CREATE TABLE IF NOT EXISTS `training_courses` (
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
	`room_id` INT
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
	`data_id` INT AUTO_INCREMENT PRIMARY KEY,
	`luminosity` INT,
	`ir` INT,
	`date` DATETIME,
	`sensor_id` INT,
	`room_id` INT,
	CONSTRAINT fk_light_sensor_room FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `moving_sensor` (
	`data_id` INT AUTO_INCREMENT PRIMARY KEY,
	`is_moving` BOOLEAN,
	`date` DATETIME,
	`sensor_id` INT,
	`room_id` INT,
	CONSTRAINT fk_moving_sensor_room FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `temperature_sensor` (
	`data_id` INT AUTO_INCREMENT PRIMARY KEY,
	`temperature` FLOAT,
	`date` DATETIME,
	`sensor_id` INT,
	`room_id` INT,
	CONSTRAINT fk_temperature_sensor_room FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `humidity_sensor` (
	`data_id` INT AUTO_INCREMENT PRIMARY KEY,
	`humidity` FLOAT,
	`date` DATETIME,
	`sensor_id` INT,
	`room_id` INT,
	CONSTRAINT fk_humidity_sensor_room FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `co2_sensor` (
	`data_id` INT AUTO_INCREMENT PRIMARY KEY,
	`co2` INT,
	`date` DATETIME,
	`sensor_id` INT,
	`room_id` INT,
	CONSTRAINT fk_co2_sensor_room FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);