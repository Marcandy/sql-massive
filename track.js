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

 SELECT p.Name, p.Price, p.Imageurl FROM products p

 INSERT INTO products (Name, Description, Price, Imageurl)
 VALUES($1, $2, $3, $4)
 RETURNING id

 DELETE FROM products
 WHERE id = $1
 RETURNING Name

 SELECT * FROM products p
 WHERE p.id = $1
