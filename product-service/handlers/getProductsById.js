import { RESPONSE } from '../constants';
import createResponse from '../utils/createResponse';
import { getProductById } from '../db/getProductById';


export const getProductsById = async (event) => {

    console.log('getProductById: ', event);
    const id = event.pathParameters && event.pathParameters.id;

    if (!id) { throw new Error('No Id provided')};

    const product = await getProductById(id);
    const errorMessage = {"error": "Product not found"};

    try {
        if(product) {
            console.log('Product: ', product);
            return createResponse(_, product);
        } else {
            return createResponse(RESPONSE.STATUSES.NOT_FOUND, errorMessage);
        }
    } catch (error) {
        console.log('Error: ', error);
        return createResponse(RESPONSE.STATUSES.SERVER_ERROR, error);
    }
};