CREATE TABLE sgt (
  id int (11) NOT NULL AUTO_INCREMENT,
  name varchar (20) NOT NULL,
  course varchar (100) DEFAULT NULL,
  grade decimal (3,0) DEFAULT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE user (
  id int (11) NOT NULL AUTO_INCREMENT,
  email varchar (100) NOT NULL,
  pwd varchar (100) NOT NULL,
  createdAt DATE,
  PRIMARY KEY (id)
);
