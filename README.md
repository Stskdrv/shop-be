## BE on microservices for my Basic White Store. 
# FE repo you can find here: https://github.com/Stskdrv/shop-react-redux-cloudfront

# Task 3:
Was done:

 * 3.1 Created a lambda function called getProductsList https://8ekiqxowx5.execute-api.eu-west-1.amazonaws.com/dev/products
 * 3.2 Create a lambda function called getProductsById https://8ekiqxowx5.execute-api.eu-west-1.amazonaws.com/dev/products/{id}
 * 3.3 Pull request created https://github.com/Stskdrv/shop-be/pull/1

 FrontEnd app integrated with /products API.

 # Extra tasks

 - Async/await is used in lambda functions
 - ES6 modules are used for Product Service implementation
 - Webpack is configured for Product Service
 - Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
 - Main error scenarios are handled by API ("Product not found" error).


# Task 4:  PLEASE NOTE: WORK IN PROGRESS PLEASE WAIT FEW MORE TIME BEFORE REVIEW
Was done:

 * 4.1 DB was created with AWS console. RDS on PostgreSQL. After it tables was created with DBeaver. SQL script with test examples was added in db folder;
 * 4.2 Points related to this task done
 * 4.3 Done
  getProductById GET - https://lox06q8imd.execute-api.eu-west-1.amazonaws.com/dev/products/{id}
  getProductList GET - https://lox06q8imd.execute-api.eu-west-1.amazonaws.com/dev/products
  createProduct POST - https://lox06q8imd.execute-api.eu-west-1.amazonaws.com/dev/products
 * 4.4 Done

 FrontEnd app integrated with /products API.

 # Extra tasks

 - All lambdas do console.log for each incoming requests and their arguments
 - All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)