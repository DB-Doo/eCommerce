# E-Commerce Back End

## Table of Contents
- [Walkthrough Video](#walkthrough-video)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Walkthrough Video
This video demonstrates the functionality of the e-commerce back end, including database schema creation, seeding, starting the server, and testing API routes.

[Link to walkthrough video](https://youtu.be/C5cJnm3IYqQ)

## Description
This project is the back end for an e-commerce site, built with Express.js and Sequelize to interact with a MySQL database. It allows for managing categories, products, and tags through a RESTful API. This application demonstrates the fundamental architecture of e-commerce sites, leveraging the latest technologies to ensure competitive edge in the internet retail industry.

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Ensure MySQL is installed on your system. Create the database using the `schema.sql` file in the `db` folder by running the commands:
    ```bash
    npm run schema
    ```
    Enter your MySQL password when prompted

4. Create a `.env` file in the root directory to store your MySQL username, password, and database name. Use the following format:
    ```
    DB_NAME='ecommerce_db'
    DB_USER='your_mysql_username'
    DB_PASSWORD='your_mysql_password'
    ```
5. Seed the database with test data by running `npm run seed`.

## Usage
To start the server, run `npm run start`. The server will sync Sequelize models to the MySQL database and listen for requests.

You can test the API routes using an API client like Insomnia or Postman. The available routes include:

- GET, POST, PUT, DELETE for categories, products, and tags
- GET routes for fetching all categories, all products, and all tags
- GET routes for fetching a single category, product, or tag by ID

## Features
- RESTful API for e-commerce back-end operations
- Sequelize ORM for database management
- Environment variable integration for sensitive data protection
- Seed data for immediate route testing
- Walkthrough video for demonstration

## Technologies Used
- Node.js
- Express.js
- MySQL2
- Sequelize
- dotenv
```