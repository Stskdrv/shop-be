import { createClient } from './client';
import { ALL_PRODUCTS } from './queries';

export const getAllProducts = async () => {
  let client;

  try {
    client = await createClient();
    const result = await client.query(ALL_PRODUCTS);

    console.log(result);

    return result;
  } finally {
    if (client) {
      client.end(); // close connection if client was setted
    }
  }
};