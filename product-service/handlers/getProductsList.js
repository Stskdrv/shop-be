import productsList from '../../data/productsList.json';
import { RESPONSE } from '../constants';
import createResponse from '../utils/createResponse';


export const getProductsList = async (event) => {
    const errorMessage = {"error": 'Products not found'};

    try {
        if(productsList.length) {
            return createResponse(_,productsList);
        } else {
            return createResponse(RESPONSE.STATUSES.NOT_FOUND,errorMessage);
        }
    } catch (error) {
        return createResponse(RESPONSE.STATUSES.SERVER_ERROR,error);
    }
};