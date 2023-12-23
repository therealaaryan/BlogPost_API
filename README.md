# BlogPost_API

This repository contains a CRUD (Create, Read, Update, Delete) API built using Node.js, Express.js, and MongoDB (using Mongoose). This API allows you to perform basic CRUD operations on a collection of data, providing endpoints for creating, reading, updating, and deleting records.

The API is hosted using Render at the following link: https://blogpost-api-v0ze.onrender.com/

This repository contains a BlogPost API built using Node.js, Express.js, and MongoDB (using Mongoose). This API allows user authentication using jwt and upon which, allows you to perform basic CRUD operations on a collection of data, providing endpoints for creating, reading, updating, and deleting the blog posts.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Data Schema](#data-schema)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed:

- node.js (version 18.16.0)
- bcrypt (version 5.1.1)
- dotenv (version 16.3.1)
- express (version 4.18.2)
- express-rate-limit (version 7.1.5)
- helmet (version 7.1.0)
- jsonwebtoken (version 9.0.2)
- mongodb (version 6.3.0)
- mongoose (version 8.0.3)
- nodemon (version 3.0.2)


## Installation

1. Clone this repository:

```bash
git clone https://github.com/therealaaryan/BlogPost_API.git
cd BlogPost_API
```
2. Install dependencies:

```bash
npm install
```


## Usage

To start the API server, run the following command:

```bash
node app.js
```

One may also use the dev command provided in the scripts of package.json to start the API server using nodemon. The command is:

```bash
npm run dev
```

The API will be available at http://localhost:3000.

For a new user:

1) Go to POST /auth/register and register as a user using the data scheme under the User Schema.
2) Go to POST /auth/login and login as a user using the data scheme under the User Schema. A token will then be generated as response.
3) Set the header Authorization: Bearer "[YOUR_TOKEN]". This makes you stay logged in and marks the author of a post you created as you (the bearer).
4) You may then perform the operations given in the endpoints to interact with the posts.


## Endpoints

The following endpoints are available:

1) POST /auth/register : Register as a user using the data scheme under the User Schema.
2) POST /auth/login : Login using the data scheme under the User Schema. The credentials must be valid else an invalid error will be thrown.
3) POST /posts : Create a post wusing the data schema under the Post Schema.
4) GET /posts : Can read all the blog posts.
5) PUT /posts/:id : Update a post wusing the data schema under the Post Schema.
6) DELETE /posts/:id : Delete the post specified by the id.


## Data Schema

### User:
{
  "username": "String",
  "password": "String"
}

### Post:
{
  "title": "String",
  "content": "String"
}


## Error Handling

The API provides appropriate error handling and validation for various scenarios. In case of an error, you will receive a JSON response with an error message and status code.

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please follow these steps:

1) Fork the repository.
2) Create a new branch for your feature/fix.
3) Make your changes and test thoroughly.
4) Submit a pull request explaining your changes.
