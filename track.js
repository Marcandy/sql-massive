CREATE TABLE products (
Id SERIAL PRIMARY KEY,
Name text,
Description text,
Price text,
Imageurl  text
);

INSERT INTO products (Name, Description, Price, Imageurl) VALUES
 ('Soda', 'its a drink', 15, 'dta tada'),
 ('Burrito','food to eat', '5', 'to infinity')
