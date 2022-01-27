# Simple Javascript MVC App

This is the server code of a simple application demonstrating the MVC
architecture using Javascript.

## Technology Stack

### Frontend

* React - UI library
* Axios - Data fetching library to use in calling the API routes defined in the
  backend

### Backend

* Node js / Express - Server and routing
* Prisma - Object Relationship Mapper that translates data models written in
  Javascript code to SQL statements that Sqlite and other database systems can
  understand
* PostgreSQL - Database

## Running

Be sure to also follow the instructions on the frontend code's repository to
install and run the frontend code.

1. Clone this repository
2. `cd` into the repository's root folder
3. Run `yarn install` or `npm install` to install dependencies
4. Run `yarn start` or `npm run start` to launch the development version of the
   app.
5. Browse to `localhost:3000` to view the app (the frontend will typically be
   served on that address)
