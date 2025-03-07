Milestone 17 - Add Products to Cart

Overview 🚀

In this milestone, we have implemented an endpoint to add products to a cart and store them in the database. This is a crucial step in understanding how to create cart functionality in a backend system.

Learning Goals 🎯

By completing this milestone, we have:

Edited the user schema to store cart products.

Created a cart schema to store products.

Developed an endpoint to receive and store product details in the cart.

Steps Implemented 📝

Updated User Schema: Modified the user schema to include a cart field.

Created Cart Schema: Defined a separate schema to store cart products.

Implemented API Endpoint: Developed a POST /cart endpoint to add products to the cart.

Database Integration: Ensured the products are stored in MongoDB.

Project Setup 🛠️

Clone the repository:

git clone <repository-link>
cd <repository-folder>

Install dependencies:

npm install

Set up environment variables in a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Run the server:

npm start

API Endpoints 📌

Add Product to Cart

Endpoint: POST /cart

Request Body:

{
  "userId": "12345",
  "productId": "67890",
  "quantity": 2
}

Response:

{
  "message": "Product added to cart successfully"
}

