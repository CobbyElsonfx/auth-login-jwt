# JWT Login Form with Express and MongoDB

## This is a simple login form built using JWT authentication and styled with Tailwind CSS. The form allows users to enter their email and password and sends a request to the server to authenticate their credentials. If the credentials are valid, the server generates a JWT token, which is stored in the browser's local storage and used for subsequent requests.

## The server-side code is built using Express.js and MongoDB. It uses the jsonwebtoken package to generate JWT tokens, and the bcryptjs package to hash passwords before storing them in the database.
# Installation

    Clone the repository:

    

git clone https://github.com/your-CobbyElsonfx/jwt-login-form-express-mongodb.git

Install the dependencies:

bash

cd jwt-login-form-express-mongodb
npm install

Create a .env file in the root directory of the project, and add the following variables:

makefile

PORT=3000
DB_URL=mongodb://localhost:27017/jwt-login-form
JWT_SECRET=mysecretkey

Replace mysecretkey with your own secret key.

Start the server:

sql

    npm start

    Open your browser and go to http://localhost:3000 to see the login form.
# Learn
 1.  To access data sent through a method such as post, we need to use a middleware known as express.json(). This middleware is responsible for converting the sent data into JavaScript objects and attaching it to the req handler, which allows us to access it using the req.body method.

 2. Emails can be validated in the models directory

 3. If you choose to place the JavaScript code in the JS directory, it will be loaded before the requested HTML page, which may result in "form is null" error messages appearing in the browser console.


# Usage

To use the login form, simply enter your email and password and click the "Submit" button. If your credentials are valid, you will be redirected to the dashboard page. If not, you will see an error message.

The server-side code is located in the app.js file. You can customize the code to fit your specific use case, such as adding more routes or middleware.
License

This project is licensed under the MIT License. See the LICENSE file for details.