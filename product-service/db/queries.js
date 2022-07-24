export const ALL_PRODUCTS = 'SELECT p.id, p.title, p.description, p.price, s.count FROM products AS p JOIN stocks AS s ON p.id = s.product_id';
export const CREATE_PRODUCT = 'INSERT INTO products (title, price, description) VALUES ($1, $2, $3) RETURNING id';
export const CREATE_STOCK = 'INSERT INTO stocks (product_id, count) VALUES ($1, $2)';