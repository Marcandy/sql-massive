UPDATE products SET Description = $1
WHERE id = $2
RETURNING  id, Description, Name
