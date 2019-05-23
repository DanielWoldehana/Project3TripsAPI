import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

//import test from './test'
import "./map.css";

require("dotenv").config();


//const API_Key='IzaSyCyX_WgsCr5PP29JQPjf_gG4oZF2n4OSUg'

//console.log(API_Key)--- have key send over from backend

//filling in lat and long with user answers

//see how rest of project comes together

//have map page reload after form page has been submitted

const mapStyles = {
  marginTop: "3%",
  marginLeft: "auto",
  marginRight: "auto",
  width: "80%",
  height: "70%"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  deleteHandler = id => {
    console.log(id);
    // this.setState({ deleteThis: id });
    console.log(this.state.deleteThis);
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
    return (
      <div className="mainMapContainer">
        {/* <form onSubmit={this.addMarker}>
          <div className="searchBox">
            <input
              type="text"
              name="lat"
              value={this.state.lat}
              placeholder="Latitude"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="searchBox">
            <input
              type="text"
              name="lng"
              value={this.state.lng}
              placeholder="Longitude"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="searchBox">
            <input
              type="text"
              name="place"
              value={this.state.place}
              placeholder="Place"
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form> */}

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
              <div onClick={this.deleteHandler(this.state.others._id)}> </div>
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
              <h4>Stayed at:{this.state.others.stayedAt}</h4>
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
