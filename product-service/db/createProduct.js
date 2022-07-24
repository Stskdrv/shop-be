import { createClient } from './client';
import { CREATE_PRODUCT, CREATE_PRODUCT } from './queries';

export const insertProduct = async (product) => {
  let client;

  try {
    client = await createClient();

    await client.query('BEGIN');
    const result = await client.query(
        CREATE_PRODUCT,
      [product.title, product.price, product.description || ''],
    );

    console.log('Create product result');
    console.log(result);

    const [entry] = result.rows;
    await client.query(CREATE_PRODUCT, [entry.id, product.count]);
    await client.query('COMMIT');

    return {
      ...entry,
      ...product,
    };
  } finally {
    if (client) {
      client.end();
    }
  }
};