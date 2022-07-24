import productsList from '../../data/productsList.json';
import { RESPONSE } from '../constants';
import createResponse from '../utils/createResponse';

async function findProductById(id) {
    return productsList.find(product => product.id === id);
}



export const getProductsById = async (event) => {
    const id = event.pathParameters.id;
    const product = await findProductById(id);
    const errorMessage = {"error": "Product not found"};

    try {
        if(product) {
            return createResponse(_, product);
        } else {
            return createResponse(RESPONSE.STATUSES.NOT_FOUND, errorMessage);
        }
    } catch (error) {
        return createResponse(RESPONSE.STATUSES.NOT_FOUND, error);
    }
};