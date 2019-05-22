import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
//import test from './test'
import "./map.css";
import trash from "./images/trash.png";
import axios from "axios";
require("dotenv").config();

//const API_Key='IzaSyCyX_WgsCr5PP29JQPjf_gG4oZF2n4OSUg'

//console.log(API_Key)--- have key send over from backend

//filling in lat and long with user answers

//see how rest of project comes together




//have map page reload after form page has been submitted

const mapStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "80%",
  height: "70%"
};

//if city = blank than pre fill coordinates
// let lat = this.props.Trips[0].lat;
// let lng = this.props.Trips[0].lng;

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    // this.height = this.height.bind(this);
    // this.length = this.length.bind(this);
    // this.spot = this.spot.bind(this);
  }

  componentDidMount() {
    // let myLat = this.props.Trips[0].lat;
    // let myLng = this.props.Trips[0].lng;
    // this.setState({
    //   [this.state.markers[0].position.lat]: this.props.Trips[0].lat
    // });
    // console.log(this.state);
  }

<<<<<<< HEAD
  deleteHandler = evt => {
    // evt.preventDefault();
    // axios
    //   .delete(`https://project3-trip-api.herokuapp.com/api/trips/delete/${id}`)
    //   .then(ph => {
    //     console.log(ph);
    //   });
    console.log("deleteThis");
=======

  showAllData = () => {
    console.log(this.props.Trips[0].lat);
    // console.log(this.state.markers[0].position.lat);
    this.props.Trips.map(trips => {
      // console.log(trips);
    });
>>>>>>> 6ca6b79f5b413289f7b390e27c7156c7bcc9cdd1
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
    console.log(props.others);
    console.log(marker);

    this.setState({
      others: props.others,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onInfoWindowClick = () => {
    console.log("hey there");
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
            onClick={() => console.log("delete this")}
          >
            <div>
              <img
                src={this.state.others.image}
                alt={`${this.state.others.countryVisited}`}
              />
              <button onClick={this.deleteHandler} className="deleteBt" />
              <h4>{this.state.others.personName}</h4>
              <h4>{this.state.others.email}</h4>
              <h4>{this.state.others.countryVisited}</h4>
              <h4>{this.state.others.cityVisited}</h4>
              <h4>{this.state.others.stateVisited}</h4>
              <h4>{this.state.others.dateVisited}</h4>
              <h4>{this.state.others.stayedAt}</h4>
              <h4>{this.state.others.activities}</h4>
              <h4>{this.state.others.lng}</h4>
              <h4>{this.state.others.lat}</h4>
              <h4>{this.state.others.comments}</h4>
              <h4>{this.state.others.rating}</h4>
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
