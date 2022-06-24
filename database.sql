DROP DATABASE IF EXISTS `exercises`;

CREATE DATABASE `exercises`;

CREATE TABLE `exercises`.`talker` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `display_order` INT NOT NULL,
  PRIMARY KEY (`id`)) ENGINE=INNODB;

INSERT INTO `exercises`.`talker`
(`id`,
`name`,
`age`,
`display_order`)
VALUES
(1,
'Michael Scott',
45,
1);


CREATE TABLE `exercises`.`spectator` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `position` INT NOT NULL,
  PRIMARY KEY (`id`)) ENGINE=INNODB;

  INSERT INTO `exercises`.`spectator`
(`id`,
`name`,
`age`,
`position`)
VALUES
(1,
'Dwight Schrute',
40,
1);