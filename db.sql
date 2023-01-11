CREATE DATABASE `apexlegends`;
USE `apexlegends`;
CREATE TABLE `legends` (
`id` INT(11) PRIMARY KEY auto_increment,
`title` VARCHAR(200),
`nick` VARCHAR(200),
`avatar` VARCHAR(200),
`desc` VARCHAR(250)
)ENGINE=innodb;

CREATE TABLE `user` (
`user_id` INT(11) PRIMARY KEY auto_increment,
`username` VARCHAR(50),
`password` VARCHAR(20)
)ENGINE=innodb;