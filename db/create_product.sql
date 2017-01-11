INSERT INTO products (Name, Description, Price, Imageurl)
VALUES($1, $2, $3, $4)
RETURNING id
