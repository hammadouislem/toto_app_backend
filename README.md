# To-Do Application

## Description
A simple To-Do application built using **Node.js**, **Express.js**, and **MongoDB**. This app allows users to create, update, delete, and retrieve To-Do items.

## Features
- Create a new To-Do
- View all To-Dos
- Update an existing To-Do
- Delete a To-Do

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Swagger (for API documentation)**

## Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (either locally or a cloud instance such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Install Dependencies
Run the following command to install the necessary dependencies:

npm install
Environment Variables
Create a .env file in the root of the project and add the following variables:

MONGODB_URL=<Your MongoDB Connection String>
PORT=5000


Run the Application
Start the server by running the following command:

npm start
Your server should now be running on http://localhost:5000.

API Documentation
The API documentation is available via Swagger at the following URL:

http://localhost:5000/api-docs

Endpoints
GET /todos
Fetches all To-Do items.

POST /todos
Creates a new To-Do.

Request Body:
{
  "text": "Learn Swagger"
}

PUT /todos
Updates an existing To-Do.

Request Body:
{
  "id": "ToDo_ID",
  "text": "Updated To-Do"
}


DELETE /todos
Deletes a To-Do by ID.

Request Body:
{
  "id": "ToDo_ID"
}

Contributing
Feel free to fork the repository and submit pull requests with any improvements or fixes!

License
This project is licensed under the MIT License - see the LICENSE file for details.
