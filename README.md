Overview

In this milesMilestone 18 - Backend Endpoint for Cart Pagetone, we have implemented a backend endpoint to fetch all the products inside a user's cart. This endpoint will be used to display the cart contents on the cart page.

Learning Goals 🎯

By completing this milestone, we have:

Created an endpoint to receive requests from the cart page.

Implemented backend logic to fetch all products inside a user's cart using their email.

Implementation Steps 🛠️

Created a Backend Endpoint for the Cart Page

Set up a route to handle requests from the cart page.

Wrote an Endpoint to Get Products Inside Cart for a User

Implemented logic to retrieve products using the user's email.

Used a database query to fetch cart data.

API Endpoint Details

Endpoint: GET /api/cart/:email

Description: Fetches all products inside the cart for the given user email.

Request Parameters:

email (string) - The email of the user whose cart products need to be fetched.

Response:

{
  "success": true,
  "cart": [
    {
      "productId": "123",
      "name": "Product Name",
      "price": 50,
      "quantity": 2
    }
  ]
}

