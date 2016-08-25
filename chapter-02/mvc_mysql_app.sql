# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.24)
# Database: mvc_mysql
# Generation Time: 2016-03-20 15:08:29 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Bands
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Bands`;

CREATE TABLE `Bands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Bands` WRITE;
/*!40000 ALTER TABLE `Bands` DISABLE KEYS */;

INSERT INTO `Bands` (`id`, `name`, `description`, `album`, `year`, `UserId`, `createdAt`, `updatedAt`)
VALUES
	(2,'Motorhead','Rock and Roll Band','http://s2.vagalume.com/motorhead/discografia/ace-of-spades-W320.jpg','1979',NULL,'2016-03-13 21:50:25','2016-03-12 21:50:25'),
	(4,'Black Sabbath','Heavy Metal Band','http://s2.vagalume.com/black-sabbath/discografia/heaven-and-hell-W320.jpg','1980',NULL,'2016-03-12 22:11:00','2016-03-12 23:08:30'),
	(6,'Deep Purple','Heavy Metal band','http://s2.vagalume.com/deep-purple/discografia/perfect-strangers-W320.jpg','1988',NULL,'2016-03-13 23:09:59','2016-03-12 23:10:29'),
	(7,'White Snake','Heavy Metal band','http://s2.vagalume.com/whitesnake/discografia/slip-of-the-tongue-W320.jpg','1989',NULL,'2016-03-13 01:58:56','2016-03-13 01:58:56'),
	(8,'Iron maiden','Heavy Metal band','http://s2.vagalume.com/iron-maiden/discografia/the-number-of-the-beast-W320.jpg','1982',NULL,'2016-03-13 02:01:24','2016-03-13 02:01:24'),
	(9,'Queen','Heavy Metal band','http://s2.vagalume.com/queen/discografia/greatest-hits-vol-1-W320.jpg','1981',NULL,'2016-03-13 02:01:25','2016-03-13 02:01:25');

/*!40000 ALTER TABLE `Bands` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
