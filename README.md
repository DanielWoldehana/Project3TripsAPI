# Footprint

## Description:

Footprint app allows users to pin markers of their travels around the world, as well as post details about their excursion.

## Motivation:

One of the common interests of our team was traveling. As we discussed our travel history, we began looking into travel apps where you could pin all the places you had been, add photos of the trip, and list the activities that were done. We decided to create Footprint as a social media guide for travel.

## Build Status:

Build: Running

## Code Style:

Style: Standard

## Tech/Framework Used:

### Backend

Express </br>
MongoDB </br>
Firebase </br>
CORS

### Frontend

React </br>
React-DOM </br>
React-Router-DOM </br>
Google-Maps-React </br>
Axios </br>
Firebase

## Features:

Incorporates a functioning google map that saves markers for each trip, which can be modified by the user.

## Installation:

### CLONE

Clone this repo to your machine using: https://github.com/DanielWoldehana/Project3TripsAPI.git

### Set Up:

$ npm install

## API Reference:

### Trips Model

Render all data: https://trips-tracker-api.herokuapp.com/api/trips <br/>
Create/add new data: https://trips-tracker-api.herokuapp.com/api/trips/create <br/>
Update trip by city visited: https://trips-tracker-api.herokuapp.com/api/trips/<cityVisited> <br/>
Delete trips by city visited: https://trips-tracker-api.herokuapp.com/api/trips/delete/<cityVisited>

## How To:

The intial page of the app includes a sign in/sign up for the user. If new user, fill in email and password and then click the "Sign Up" button. If current user, fill in email and password then click the "Sign In" button. Once signed in, the user can begin adding markers for their trips using the "Add Trip" link in the navbar. The marker includes the following information: Image, Username, Email, Country, State, City, Lattitude, Longitude, Date, Stayed At, Activities, Comments, and Rating. Users are able to update and delete any trips using the "Trip Update" link and the "Delete" search bar located above the map on the "My Map" page. There is an "Instructions" drop down menu for further assistance.

## Deployed Site

http://footprint.surge.sh/

## Team (Alphabetical):

https://github.com/DanielWoldehana <br/>
https://github.com/DevinMauck <br/>
https://github.com/zlessner
