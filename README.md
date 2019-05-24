# Footprint

## Description:

Footprint app allows users to pin markers of their travels around the world, as well as post details about their excursion.

## Motivation:

One of the common interests of our team was traveling. As we discussed our travel history, we began looking into travel apps where you could pin all the places you had been, add photos of the trip, and list the activities that were done. As a social media guide for travel, we decided to create Footprint.

## Build Status:

Build: Running

## Code Style:

Style: Standard

## Tech/Framework Used:

### Backend

Express
MongoDB
Firebase
CORS

### Frontend

React
React-DOM
React-Router-DOM
Google-Maps-React
Axios
Firebase

## Features:

Incorporates a functioning google map that saves markers for each trip, which can be modified by the user.

## Code Example (Map Function):

<Map
          google={this.props.google}
          zoom={2}
          style={mapStyles}
          initialCenter={this.state.initCenter}
          onDragend={this.centerMoved}
          bounds={this.state.bounds}
          onClick={this.onMapClicked}
          onChange={this.handleInputChange}
        >
{this.props.Trips.map(trip => {
let { lat, lng } = trip;

            let position = {
              lat: lat,
              lng: lng
            };
            return (
              <Marker
                position={position}
                onClick={this.onMarkerClick}
                others={trip}
                onChange={this.handleInputChange}
              />
            );
          })}

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

### Bucklist Model

Render all bucklist data: https://trips-tracker-api.herokuapp.com/api/trips/buckList <br/>
Create/Add new bucklist data: https://trips-tracker-api.herokuapp.com/api/trips/createBucket <br/>
Update bucklist data: https://trips-tracker-api.herokuapp.com/api/trips/updateBucket/<nameOfSite> <br/>
Delete bucklist data: https://trips-tracker-api.herokuapp.com/api/trips/deleteBucket/<nameOfSite>

## How To:

The intial page of the app includes a sign in/sign up for the user. If new user, fill in email and password and then click the "Sign Up" button. If current user, fill in email and password then click the "Sign In" button. Once signed in, the user can begin adding markers for their trips using the "Add Trip" link in the navbar. The marker includes the following information: Image, Username, Email, Country, State, City, Lattitude, Longitude, Date, Stayed At, Activities, Comments, and Rating. Users are able to update and delete any trips using the "Trip Update" link and the "Delete" search bar located above the map on the "My Map" page. There is an "Instructions" drop down menu for further assistance.

## Team (Alphabetical):

https://github.com/DanielWoldehana <br/>
https://github.com/DevinMauck <br/>
https://github.com/zlessner
