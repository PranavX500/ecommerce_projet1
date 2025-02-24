Overview 🌟

In this milestone, we have implemented the functionality to edit uploaded products. We added an edit button to the product card, created a backend endpoint to update the product details in MongoDB, and autofilled the form with the existing data for easy modification.

Learning Goals 🎯

By completing this milestone, we learned:

How to write an endpoint to update existing data in MongoDB.

How to autofill a form with previous data and provide an option to edit it.

Steps Implemented 📝

Backend - Update Endpoint:

Created an API endpoint to receive updated product data and modify the existing entry in MongoDB.

Used findByIdAndUpdate method to update the product.

Frontend - Edit Button & Form Autofill:

Added an edit button to each product card.

When clicked, the form autofills with the current product data.

Users can edit and save the changes.
