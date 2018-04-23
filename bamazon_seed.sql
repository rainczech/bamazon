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

Insert into products (product_name, department_name, price, stock_quantity)
values ("portable power bank", "electronics", 19, 10);

Insert into products (product_name, department_name, price, stock_quantity)
VALUES ("smart speaker", "electronics", 40, 30);

Insert into products (product_name, department_name, price, stock_quantity)
VALUES ("wrist watch", "men", 50, 5);

Insert into products (product_name, department_name, price, stock_quantity)
VALUES ("handheld vacuum", "home", 30, 2);

Insert into products (product_name, department_name, price, stock_quantity)
VALUES ("BB cream", "health and beauty", 12, 20);

Insert into products (product_name, department_name, price, stock_quantity)
VALUES ("sunscreen", "health and beauty", 6, 25);

Insert into products (product_name, department_name, price, stock_quantity)
VALUES ("picture frame", "home", 5, 12);
Insert into products (product_name, department_name, price, stock_quantity)
VALUES ("headphones", "electronics", 200, 3);

Insert into products (product_name, department_name, price, stock_quantity)
VALUES ("running shoes", "men", 80, 40);

Insert into products (product_name, department_name, price, stock_quantity)
VALUES ("dress shoes", "women", 100, 15);

