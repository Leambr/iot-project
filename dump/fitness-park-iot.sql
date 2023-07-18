CREATE TABLE IF NOT EXISTS `users` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`username` VARCHAR(255),
	`password` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `rooms` (
	`id` CHAR(50) PRIMARY KEY,
	`name` ENUM(
		'Vestiaire homme',
		'Vestiaire femme',
		'Machines',
		'Abdos',
		'Cours commun',
		'Administration'
	)
);

CREATE TABLE IF NOT EXISTS `sensor` (
	`id` INT PRIMARY KEY,
	`type` ENUM(
		'Light',
		'Temperature',
		'Ventilation',
		'Motion',
		'Humidity',
		'Co2'
	),
	`room_id` CHAR(50),
	CONSTRAINT fk_sensor_room FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `automation` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`task_date` DATETIME,
	`type` ENUM('Lumière', 'Climatisation', 'Chauffage'),
	`is_done` BOOLEAN,
	`sensor_id` INT,
	`room_id` CHAR(50),
	CONSTRAINT fk_sensor_automation FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_room_automation FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
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
	`room_id` CHAR(50),
	CONSTRAINT fk_training_room FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
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

--  INSERT

INSERT INTO `users` (`id`, `username`, `password`) VALUES (NULL, 'username', 'password');

INSERT INTO `rooms` (`id`, `name`) VALUES ('ef017258-a5d7-401e-a4ee-266c09d34581', 'Vestiaire homme'), ('abe0e3f3-92ff-4fa3-87f5-63964634e51b', 'Vestiaire femme'), ('9fa47c36-e52f-4698-b655-f7d5a8ce80a1', 'Machines'), ('2d113908-ea6a-4532-b302-886d40ef7169', 'Abdos'), ('82710134-af42-4601-a129-0975b48a0e5c', 'Cours commun'), ('dd943e23-4e89-4333-860e-c66483d3e624', 'Administration');

INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES (131, 'Co2', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), (104, 'Light', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), (112, 'Temperature', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), (115, 'Motion', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), (114, 'Humidity', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1');
INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES (112, 'Temperature', 'dd943e23-4e89-4333-860e-c66483d3e624'), (115, 'Motion', 'dd943e23-4e89-4333-860e-c66483d3e624'), (114, 'Humidity', 'dd943e23-4e89-4333-860e-c66483d3e624');
INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES (112, 'Temperature', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), (115, 'Motion', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), (114, 'Humidity', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1');
-- INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES (112, 'Temperature', NULL), (115, 'Motion', NULL), (114, 'Humidity', NULL), (131, 'Co2', NULL);