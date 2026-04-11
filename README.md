# User Registration App

A simple full-stack web application built with **Node.js**, **Express.js**, and **MongoDB** (Mongoose) that allows users to register and view registered users.

## Features

- User registration with form validation
- MongoDB database integration using Mongoose
- EJS templating engine for dynamic views
- Static file serving (CSS, JS, images)
- RESTful API endpoint for submitting user data
- View all registered users
- Clean and responsive UI (using EJS)

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM) & MYSQL
- **Frontend**: EJS (Embedded JavaScript), HTML, CSS
- **Others**: dotenv (recommended), Express middleware

## Project Structure
```bash
project-folder/
├── views/
│   ├── index.ejs
│   └── RegistrationPage.ejs
├── public/
│   ├── Panels/
│   │   └── Admin.ejs          # Currently Empty
│   ├── RegForm.css
│   └── style.css
├── server_v1.js               # MongoDB Version (Current)
├── server_v2.js               # SQL Version (Currently in work)
├── package.json
└── README.md
