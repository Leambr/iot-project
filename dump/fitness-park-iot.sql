CREATE TABLE IF NOT EXISTS `users` (
	`id` INT(255) AUTO_INCREMENT,
	`username` VARCHAR(255),
	`lastname` VARCHAR(255),
	`password` VARCHAR(255),
	PRIMARY KEY (`id`)
);