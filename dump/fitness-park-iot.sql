CREATE TABLE IF NOT EXISTS `users` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`username` VARCHAR(255),
	`password` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `rooms` (
	`id` VARCHAR(100) PRIMARY KEY,
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
	`id` VARCHAR(100) PRIMARY KEY,
	`type` ENUM(
		'Luminosity',
		'Temperature',
		'Motion',
		'Humidity',
		'Co2',
		'Voltage',
		'Person',
		'Light',
		'Vent',
		'Heat'
	),
	`room_id` VARCHAR(100),
	CONSTRAINT fk_sensor_room FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `automation` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`task_date` DATETIME,
	`type` ENUM('Lumière', 'Climatisation', 'Chauffage'),
	`is_done` BOOLEAN,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
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
	`room_id` VARCHAR(100),
	CONSTRAINT fk_training_room FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `luminosity_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`luminosity` INT,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_luminosity_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_luminosity_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `moving_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`is_moving` BOOLEAN,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_moving_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_moving_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `temperature_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`temperature` FLOAT,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_temperature_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_temperature_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `humidity_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`humidity` FLOAT,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_humidity_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_humidity_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `co2_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`co2` INT,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_co2_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_co2_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `voltage_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`kwh` INT,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_voltage_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_voltage_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `person_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`person` BOOLEAN,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_person_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_person_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `light_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`is_light` BOOLEAN,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_light_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_light_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `vent_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`is_vent` BOOLEAN,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_vent_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_vent_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `heat_sensor` (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
	`sensor_id` VARCHAR(100),
	`room_id` VARCHAR(100),
	`is_heat` BOOLEAN,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_heat_sensor FOREIGN KEY (sensor_id) REFERENCES sensor(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_heat_room_sensor FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- User
INSERT INTO `users` (`id`, `username`, `password`) VALUES (NULL, 'username', 'password');

-- Room
INSERT INTO `rooms` (`id`, `name`) VALUES 
('09fc90fc-4d2c-4bc8-bfcb-6b44bfb92302', 'Vestiaire homme'), 
('dd943e23-4e89-4333-860e-c66483d3e624', 'Vestiaire femme'), -- reel id
('82710134-af42-4601-a129-0975b48a0e5c', 'Machines'), -- reel id
('44ef0e92-74ac-42f8-b2a6-ac37dbc149eb', 'Abdos'), 
('93c76f4b-ab2b-422e-81fb-afac6eff8af8', 'Cours commun'), 
('9fa47c36-e52f-4698-b655-f7d5a8ce80a1', 'Administration'); -- reel id

-- Sensor
-- 9fa47c36-e52f-4698-b655-f7d5a8ce80a1
INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES 
('67578cac-db9e-4bcf-bb21-353e2cee9b96', 'Co2', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), 
('cb5d773c-427b-411d-953b-128ba8b77cb6', 'Luminosity', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), 
('61ca8feb-b03f-4ded-a92b-46d689c5f3d3', 'Temperature', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), 
('37f2b164-46de-442b-be82-6c4dccb56107', 'Motion', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), 
('9958c375-5365-4aee-b737-88b56225a59a', 'Humidity', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'),
('a5ebc012-a825-4e78-af90-03869624159b', 'Voltage', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'),
('47eb2afc-4756-4da9-9db3-1d5b6155fe47', 'Person', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'),
('ba1859b1-7c60-442d-803a-196d664bd70c', 'Light', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'),
('052b410b-502b-4abe-8563-7b763e70670d', 'Vent', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'),
('02282abe-01d1-4a53-9b1b-707390ceeb9b', 'Heat', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1');
-- 82710134-af42-4601-a129-0975b48a0e5c
INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES 
('34b0761d-9382-4e68-9cdb-dfdbe114e8cd', 'Co2', '82710134-af42-4601-a129-0975b48a0e5c'), 
('6f44fdfe-19ab-4240-acc7-f88c82b8df38', 'Luminosity', '82710134-af42-4601-a129-0975b48a0e5c'), 
('e1e53f24-c686-490b-b881-32b251e2275f', 'Temperature', '82710134-af42-4601-a129-0975b48a0e5c'), 
('da76bf9b-fd38-4b8a-90d4-00b0ffd68c4e', 'Motion', '82710134-af42-4601-a129-0975b48a0e5c'), 
('68db328f-6f23-4c63-8bd7-d49bbe2dad2c', 'Humidity', '82710134-af42-4601-a129-0975b48a0e5c'),
('9fe9812c-76ec-4a58-83bb-957c1ee6fb70', 'Voltage', '82710134-af42-4601-a129-0975b48a0e5c'),
('03262c88-3f04-41d1-9144-da414e891c01', 'Person', '82710134-af42-4601-a129-0975b48a0e5c'),
('18f9c2e8-52bd-4921-ae63-f778df6dd7b3', 'Light', '82710134-af42-4601-a129-0975b48a0e5c'),
('ab4068f6-5524-4470-a344-dd602840b44d', 'Vent', '82710134-af42-4601-a129-0975b48a0e5c'),
('a726023d-cb13-48f0-a693-93fb0a596e0b', 'Heat', '82710134-af42-4601-a129-0975b48a0e5c');
-- dd943e23-4e89-4333-860e-c66483d3e624
-- INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES 
-- ('16fe3b26-2516-4eff-9401-d92fe9f14e87', 'Co2', 'dd943e23-4e89-4333-860e-c66483d3e624'), 
-- ('0bfd7d5b-47b0-43a6-9be2-47e1c1d7a07a', 'Luminosity', 'dd943e23-4e89-4333-860e-c66483d3e624'), 
-- ('73b6396b-7bc3-4df5-ba78-2ce972422fd7', 'Temperature', 'dd943e23-4e89-4333-860e-c66483d3e624'),
-- ('886d0035-51d6-435c-b230-58f8fba76ce6', 'Motion', 'dd943e23-4e89-4333-860e-c66483d3e624'), 
-- ('cfacfa06-955e-4fb2-8875-0cfb44b78d41', 'Humidity', 'dd943e23-4e89-4333-860e-c66483d3e624'),
-- ('9fe9812c-76ec-4a58-83bb-957c1ee6fb70', 'Voltage', 'dd943e23-4e89-4333-860e-c66483d3e624'),
-- ('91d19ebf-4c0f-44b0-8252-7e48f85f295c', 'Person', 'dd943e23-4e89-4333-860e-c66483d3e624'),
-- ('97215733-8e88-4d93-b923-ae9c43de1ee8', 'Light', 'dd943e23-4e89-4333-860e-c66483d3e624'),
-- ('6faa6895-4e19-418b-9462-1ba64a038fbb', 'Vent', 'dd943e23-4e89-4333-860e-c66483d3e624'),
-- ('3e2099af-6571-44c3-bb79-4f6d0a33eb75', 'Heat', 'dd943e23-4e89-4333-860e-c66483d3e624');

-- INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES (112, 'Temperature', 'dd943e23-4e89-4333-860e-c66483d3e624'), (115, 'Motion', 'dd943e23-4e89-4333-860e-c66483d3e624'), (114, 'Humidity', 'dd943e23-4e89-4333-860e-c66483d3e624');
-- INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES (112, 'Temperature', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), (115, 'Motion', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1'), (114, 'Humidity', '9fa47c36-e52f-4698-b655-f7d5a8ce80a1');
-- INSERT INTO `sensor` (`id`, `type`, `room_id`) VALUES (112, 'Temperature', NULL), (115, 'Motion', NULL), (114, 'Humidity', NULL), (131, 'Co2', NULL);
