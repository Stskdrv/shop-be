import productsList from '../data/productsList.json';

async function findProductById(id) {
    return productsList.find(product => product.id === id);
}



export const getProductsById = async (event) => {
    const id = event.pathParameters.id;
    const product = await findProductById(id);
    const errorMessage = 'Product not found';
    // const createResponse = (answ) => ({
    //     statusCode: 200,
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Credentials': true,
    //     },
    //     body: answ,
    // });

    try {
        if(product) {
            return({
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify(product),
            })
        } else {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                body: errorMessage,
            }
        }
        // productsList.length ? 
        //     createResponse(JSON.stringify(productsList)) :
        //     createResponse(erroeMessage);
    } catch (error) {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(error),
        };
    }


};