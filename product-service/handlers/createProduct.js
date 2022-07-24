import createResponse from '../utils/createResponse';
import { insertProduct } from '../db/createProduct';
import { productValidation } from '../db/validation/productValidation';
import { RESPONSE } from '../constants';

export const createProduct = async (event = {}) => {
  let response;

  console.log('createProduct');
  console.log(event);

  try {
    const { body = '' } = event;
    const data = JSON.parse(body);

    const error = productValidation(data);
    if (error) {
      console.log('Product validation error: ', error);

      throw new Error('Product validation error');
    }

    const product = await insertProduct(data);

    console.log('Product created: ', product);

    response = createResponse(RESPONSE.STATUSES.OK, product);
  } catch (err) {
    console.log('error', err);

    response = createResponse(RESPONSE.STATUSES.SERVER_ERROR, err);
  }

  return response;
};