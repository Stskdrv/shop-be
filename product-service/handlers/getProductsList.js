import { getAllProducts } from '../db/getAllProducts';
import { RESPONSE } from '../constants';
import createResponse from '../utils/createResponse';


export const getProductsList = async (event) => {
    let response;
    const errorMessage = {"error": 'Products not found'};

    console.log('getProductList', event);

    try {
        const result = await getAllProducts();
        console.log('Response', result);
        response =  createResponse(_,result.rows);
    } catch (error) {
        console.log('Error', error);
        response =  createResponse(RESPONSE.STATUSES.SERVER_ERROR,error);
    }

    return response;
};