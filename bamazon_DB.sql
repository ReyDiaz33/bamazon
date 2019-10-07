DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(50) NOT NULL,
  `department_id` INT(11) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `stock_quantity` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `department_id`(`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

INSERT INTO products (`id`, `product_name`,`department_id`, `price`, `stock_quantity`)
VALUES 
(1, "Hook Blu-Ray", 1, 25.99, 30), 
(2, "TMNT Collection Blu-Ray", 1, 35.99, 15), 
(3, "Capital Punishment CD", 2, 7.99, 10), 
(4, "My Big Fat Greek Wedding DVD", 3, 10.99, 35), 
(5, "Footloose VHS", 4, 2.99, 7), 
(6, "Bronx Tale DVD", 1, 15.99, 50),
(7, "Pokemon The firs Movie VHS", 4, 5.99, 5),
(8, "Enter the Dragon CD", 2, 2.99, 300),
(9, "Power Rangers DVD", 3, 8.99, 46),
(10, "Grease CD", 12, 7.99, 28);

Select * FROM products;