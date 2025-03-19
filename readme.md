Steps for Milestone 22 📝

Create an Endpoint: Develop an API endpoint that receives the address from the frontend address form.

Update User Collection: Add the received address to the address array inside the user collection in the database.

Understand Backend Data Storage: Learn how to create an endpoint that efficiently stores the address in the database.

Implementation Details 🛠️

Tech Stack: Node.js, Express.js, MongoDB (Mongoose)

Endpoint: POST /api/user/address

Request Body:

{
  "userId": "12345",
  "address": {
    "street": "123 Main St",
    "city": "Example City",
    "state": "Example State",
    "zip": "123456"
  }
}

Response:
{
  "message": "Address added successfully",
  "user": { ...updatedUser }
}