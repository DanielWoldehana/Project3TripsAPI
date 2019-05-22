import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
//import test from './test'
require("dotenv").config();

//const API_Key='IzaSyCyX_WgsCr5PP29JQPjf_gG4oZF2n4OSUg'

//console.log(API_Key)--- have key send over from backend

//filling in lat and long with user answers

//see how rest of project comes together

//create multiple pins

const mapStyles = {
  width: "100%",
  height: "100%"
};

//if city = blank than pre fill coordinates

export class MapContainer extends Component {
  constructor() {
    super();

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markers: [
        // { position: { lat: "", lng: "" }, name: "" }
      ],
      bounds: {},
      lat: "",
      lng: "",
      place: "",
      initCenter: {
        lat: 38.9072,
        lng: -77.0369
      }
    };

    // this.height = this.height.bind(this);
    // this.length = this.length.bind(this);
    // this.spot = this.spot.bind(this);
  }

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
        name: prevState.place
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
  // length(evt) {

  //   let newBounds = {
  //     lat: this.state.center.lat,
  //     lng: parseFloat(evt.target.value),
  //     zoom: 7
  //   }

  //   var bounds = new this.props.google.maps.LatLngBounds();

  //   bounds.extend(newBounds)

  //   this.setState({ bounds: bounds })
  // }

  // spot(evt) {
  //   this.setState({ place: evt.target.value })
  //   console.log(this.state.place)
  //   console.log(evt.target.value)
  // }

  onMarkerClick = (props, marker, e) => {
    this.setState({
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
    let allTrips = this.props.Trips.map(trips => {
      console.log(trips.data);
      return (
        <div>
          <img src={trips.image} alt="photo" />
          <h1>Name: {trips.personName}</h1>
          <h3>Email: {trips.email}</h3>
          <h3>Country: {trips.countryVisited}</h3>
          <h3>City: {trips.cityVisited}</h3>
          <h3>State: {trips.stateVisited}</h3>
          <h3>Date: {trips.dateVisited}</h3>
          <h3>Stayed: {trips.stayedAt}</h3>
          <h3>Activities: {trips.activities}</h3>
          <h3>Comments: {trips.comments}</h3>
          <h3>Rating: {trips.rating}</h3>
        </div>
      );
    });

    console.log(this.state.center);
    console.log(this.state.lat);
    console.log(this.state.initCenter);
    return (
      <div>
        <form onSubmit={this.addMarker}>
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
        </form>

        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={this.state.initCenter}
          onDragend={this.centerMoved}
          bounds={this.state.bounds}
          onClick={this.onMapClicked}
        >
          {this.state.markers.map(marker => {
            return <Marker {...marker} onClick={this.onMarkerClick} />;
          })}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>

        <div>{allTrips}</div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyX_WgsCr5PP29JQPjf_gG4oZF2n4OSUg"
})(MapContainer);

// export default Map;
