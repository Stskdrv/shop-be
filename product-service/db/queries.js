export const ALL_PRODUCTS = 'SELECT * FROM store.products AS p JOIN store.stocks AS s ON p.id = s.product_id';
export const CREATE_PRODUCT = 'INSERT INTO store.products (title, price, description) VALUES ($1, $2, $3) RETURNING id';
export const CREATE_STOCK = 'INSERT INTO store.stocks (product_id, count) VALUES ($1, $2)';