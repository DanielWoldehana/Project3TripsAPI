import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
//import test from './test'
import "./map.css";
require("dotenv").config();

//const API_Key='IzaSyCyX_WgsCr5PP29JQPjf_gG4oZF2n4OSUg'

//console.log(API_Key)--- have key send over from backend

//filling in lat and long with user answers

//see how rest of project comes together

//create multiple pins

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


  showAllData = () => {
    console.log(this.props.Trips[0].lat);
    // console.log(this.state.markers[0].position.lat);
    this.props.Trips.map(trips => {
      // console.log(trips);
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

    this.showAllData();
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
              <h4>{this.state.others.countryVisited}</h4>
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
