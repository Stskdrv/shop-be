import { createClient } from './client';
import { ALL_PRODUCTS } from './queries';

export const PRODUCT_BY_ID = `${ALL_PRODUCTS} WHERE p.id = $1`;

export const getProductById = async (id) => {
  let client;

  try {
    client = await createClient();
    const result = await client.query(PRODUCT_BY_ID, [id]);

    return result.rows.length ? result.rows[0] : null;
  } finally {
    if (client) {
      client.end();
    }
  }
};