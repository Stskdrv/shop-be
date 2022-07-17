import productsList from '../data/productsList.json';


export const getProductsList = async (event) => {
    const errorMessage = {"error": 'Products not found'};
    const createResponse = (resp) => ({
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: resp,
    });

    try {
        if(productsList.length) {
            return createResponse(JSON.stringify(productsList));
        } else {
            return createResponse(JSON.stringify(errorMessage));
        }
    } catch (error) {
        return createResponse(JSON.stringify(error));
    }
};