INSERT INTO simproducts (img_url, productname, price)
VALUES($1, $2, $3);
SELECT * FROM simproducts
order by id;