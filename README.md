# Journal App - Chingu Pre-Work Tier 3

## Overview
This app was created for the Chingu Voyage 11 pre-work. It's a simple CRUD application with authorization & authentication.

**LIVE VERSION:** [Chingu Journal](https://chingu-journal.herokuapp.com/)

## Features
* Users can register via email and password
* Users can login with their email and password 
* Users can view a list of their own notes 
* Users can create new notes
* Users can update their own notes
* Users can delete their own notes

## Running this project locally
1. Clone this project locally
2. Run `npm install` in your bash/command line
3. Create a local `config.env` environment variable and update accordingly
  - NODE_ENV=<development or production>
  - PORT=3000
  - DATABASE=<your mongodb uri>
  - DATABASE_PASSWORD=<your mongodb password>
  - JWT_SECRET=<your secret>
  - JWT_EXPIRES_IN=90d
  - JWT_COOKIE_EXPIRES_IN=90
3. Run `npm start` in your bash/command line


## Tech Used / Dependencies
* Uses Server-side rendering via PUG templates
* Uses [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 
