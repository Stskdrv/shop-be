import * as jest from 'jest';
 
 const getProductsList = async (event) => {
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


jest.mock(getProductsList);

describe('tests for getProductsList handler', () => {
  const mockedList = [];

  it('should return list of the products', async () => {
    getProductsList.mockResolvedValue(mockedList);

      await getProductsList({});

      expect(getProductsList).toBeCalledTimes(1);
  });
});