DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (45),
    department_name VARCHAR (50),
    price decimal (7,2),
    stock_quantity int (4),
    PRIMARY KEY(id)
);