--
DROP DATABASE IF EXISTSs sgt;

CREATE DATABASE
IF NOT EXISTS sgt;
USE sgt;
SHOW DATABASES;

-- Table structure for table `sgt`
--


CREATE TABLE `sgt`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `name` varchar
(20) NOT NULL,
  `course` varchar
(100) DEFAULT NULL,
  `grade` decimal
(3,0) DEFAULT NULL,
  PRIMARY KEY
(`id`)
);

--
-- Dumping data for table `stg`
--

INSERT INTO `
sgt`
VALUES
  (1, 'Uzair', 'html', 99);
INSERT INTO `
sgt`
VALUES
  (2, 'Cody', 'css', 100);
INSERT INTO `
sgt`
VALUES
  (3, 'Dae', 'javascript', 100);

--
-- Table structure for table `topic`
--

CREATE TABLE `topic`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `title` varchar
(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int
(11) DEFAULT NULL,
  PRIMARY KEY
(`id`)
);

--
-- Dumping data for table `topic`
--

INSERT INTO `
topic`
VALUES
  (1, 'MySQL', 'MySQL is...', '2018-01-01 12:10:11', 1);
INSERT INTO `
topic`
VALUES
  (2, 'Oracle', 'Oracle is ...', '2018-01-03 13:01:10', 1);
INSERT INTO `
topic`
VALUES
  (3, 'SQL Server', 'SQL Server is ...', '2018-01-20 11:01:10', 2);
INSERT INTO `
topic`
VALUES
  (4, 'PostgreSQL', 'PostgreSQL is ...', '2018-01-23 01:03:03', 3);
INSERT INTO `
topic`
VALUES
  (5, 'MongoDB', 'MongoDB is ...', '2018-01-30 12:31:03', 1);



CREATE TABLE `user`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `email` varchar
(100) NOT NULL,
  `pwd` varchar
(100) NOT NULL,
createdAt DATE,
  PRIMARY KEY
(`id`)
);

INSERT INTO `
user`
VALUES
  ('jinho6225@hotmail.com', '111111');
