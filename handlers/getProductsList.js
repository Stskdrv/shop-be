import productsList from '../data/productsList.json';

export const getProductsList = async (event) => {
    const products = await productsList;
    const erroeMessage = 'Product not found';
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
        if(productsList.length) {
            return({
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify(products),
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

// [
//     {
//     "products": [
//         {
//             "id": "fad51db5-2fd1-4954-a896-82424d6a991a",
//             "count": 10,
//             "price": 1000,
//             "img": "https://www.photostock.com.mx/stock-photo-preview/92430395/1000/iss_9228_24119.jpg",
//             "title": "Creafted t-shirt"
//         },
//         {
//             "id": "29137d27-1f31-4eff-8723-3823d9b13132",
//             "count": 7,
//             "price": 1500,
//             "img": "https://www.photostock.com.mx/stock-photo-preview/134497488/1000/ist_30689_08064.jpg",
//             "title": "New T-shirt"
//         },
//         {
//             "id": "8653e885-8321-4faa-9b97-c2461e6e20ac",
//             "count": 4,
//             "price": 1300,
//             "img": "https://www.photostock.com.mx/stock-photo-preview/87620596/ing_19043_35452.jpg",
//             "title": "T-shirt"
//         },
//         {
//             "id": "525283d3-6287-4e5e-ace1-5531970825fb",
//             "count": 6,
//             "price": 1600,
//             "img": "https://www.photostock.com.mx/stock-photo-preview/89484365/ing_19043_154835.jpg",
//             "title": "T-shirt"
//         },
//         {
//             "id": "980fe5f3-f028-49d9-9ee8-b4ff4654e39a",
//             "count": 9,
//             "price": 1400,
//             "img": "https://www.photostock.com.mx/stock-photo-preview/89399635/ing_19043_111997.jpg",
//             "title": "T-shirt"
//         }
//     ]
// }

// ]