import { getResponse } from '../helpers/response';
import { createProduct } from '../db/createProduct';
import { productValidation } from '../db/validation/productValidation';
import { ERRORS, ERROR_TYPES } from '../constants/error';
import { RESPONSE_STATUSES } from '../constants/response';

export const createProductHandler = async (event = {}) => {
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

    const product = await createProduct(data);

    console.log('Product created: ', product);

    response = getResponse(200, product);
  } catch (err) {
    console.log(err);

    const error = ERRORS[err && err.message] || ERRORS[ERROR_TYPES.DEFAULT];

    response = getResponse(error.code, error);
  }

  return response;
};