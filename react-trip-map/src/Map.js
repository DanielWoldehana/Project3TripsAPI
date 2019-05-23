import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Axios from "axios";
import TripUpdate from "./TripUpdate";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import "./map.css";
require("dotenv").config();
const url = "https://project3-trip-api.herokuapp.com/api/trips";

const mapStyles = {
  marginTop: "7%",
  marginLeft: "auto",
  marginRight: "auto",
  width: "80%",
  height: "67%",
  cursor: "pointer"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      deleteCity: "",
      deleteThis: "",
      others: {},
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      bounds: {},
      lat: "",
      lng: "",
      place: {
        name: ""
      },
      initCenter: {
        lat: 38.9072,
        lng: -77.0369
      }
    };
  }

  handleDelete = evt => {
    evt.preventDefault();
    Axios.delete(
      `https://project3-trip-api.herokuapp.com/api/trips/delete/${
        this.state.value
      }`
    ).then(ph => {
      console.log(ph);
      this.props.showAllTrips();
      this.setState({ deleteCity: "" });
    });
    console.log(this.state.value);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    console.log(this.state.value);
    event.preventDefault();
    Axios.delete(
      `https://project3-trip-api.herokuapp.com/api/trips/delete/${
        this.state.value
      }`
    ).then(ph => {
      console.log(ph);
      this.props.showAllTrips();
    });
  };
  addMarker = evt => {
    evt.preventDefault();
    this.setState(prevState => {
      let { lat, lng } = prevState;
      let newMarkers = [...prevState.markers];
      newMarkers.push({
        position: {
          lat,
          lng
        },
        name: prevState.place.name
      });
      return { markers: newMarkers };
    });
  };

  handleInputChange = evt => {
    let name = evt.target.name;
    let value = evt.target.value;

    this.setState({ [name]: value });
    //this.onCenterChanged({lat: -34, lng: 151});
  };

  onMarkerClick = (props, marker, e) => {
    console.log(props.others);
    console.log(marker);

    this.setState({
      others: props.others,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log(this.state.initCenter);
    const selectItems = this.props.Trips.map(trip => {
      return <option value={trip.cityVisited}>{trip.cityVisited}</option>;
    });
    return (
      <div className="mainMapContainer">
        <div className="deletePin">
          <form className="deleteContainer" onSubmit={this.handleSubmit}>
            <label>
              <span className="spanSelect">Select City to Delete Pin:</span>
            </label>
            <select
              className="selectDropDown"
              value={this.state.value}
              onChange={this.handleChange}
            >
              {selectItems}
            </select>

            <input className="deleteButton2" type="submit" value="Delete Pin" />
          </form>
        </div>

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

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <img
                src={this.state.others.image}
                alt={`${this.state.others.countryVisited}`}
              />
              <h4>{this.state.others.personName}</h4>
              <h4>Email: {this.state.others.email}</h4>
              <h4>Country: {this.state.others.countryVisited}</h4>
              <h4>City: {this.state.others.cityVisited}</h4>
              <h4>State: {this.state.others.stateVisited}</h4>
              <h4>Date: {this.state.others.dateVisited}</h4>
              <h4>Stayed at: {this.state.others.stayedAt}</h4>
              <h4>Activities: {this.state.others.activities}</h4>
              <h4>Longitude: {this.state.others.lng}</h4>
              <h4>Latitude: {this.state.others.lat}</h4>
              <h4>Review: {this.state.others.comments}</h4>
              <h4>Rating: {this.state.others.rating}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyX_WgsCr5PP29JQPjf_gG4oZF2n4OSUg"
})(MapContainer);

// export default Map;
