import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import test from './test'
require('dotenv').config()

const API_Key='IzaSyCyX_WgsCr5PP29JQPjf_gG4oZF2n4OSUg'

console.log(API_Key)

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  constructor() {
		super()

  this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    center: {
    //lat: -1.2884,
    lat: "",
    lng: 36.8233
    },
    place: 'Kenyatta International Convention Centre'
  };

  this.searchCity = this.searchCity.bind(this);
}

  searchCity(evt) {
    this.setState({lat: evt.target.value})
    console.log(evt.target.value)
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {

    return (
      <div>
<div className="searchBox">
<input 
type="text"
placeholder="Search Place"
onChange={this.searchCity}
/>
</div>



      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={this.state.center}

>
        <Marker
        onClick={this.onMarkerClick}
        name={this.state.place}
      />
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

      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCyX_WgsCr5PP29JQPjf_gG4oZF2n4OSUg'
})(MapContainer);












// import React, { Component } from "react";
// import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps";

// const Map = withScriptjs(
//     withGoogleMap(props => (
//         <GoogleMap
//             defaultZoom={12}
//             defaultCenter={{ lat: -34.397, lng: 150.644 }}
//             onClick={e => props.onMapClick(e)}
//         >
//             {props.marks.map((mark, index) => (
//                 <Circle
//                     key={index}
//                     center={mark}
//                     radius={500}
//                     options={{
//                         strokeColor: "#66009a",
//                         strokeOpacity: 0.8,
//                         strokeWeight: 2,
//                         fillColor: `#66009a`,
//                         fillOpacity: 0.35,
//                         zIndex: 1
//                     }}
//                 />
//             ))}
//         </GoogleMap>
//     ))
// );

// class ReportsPage extends Component {
//     state = {
//         marks: []
//     };

//     setMark = e => {
//         this.setState({ marks: [...this.state.marks, e.latLng] });
//     };

//     deleteMark = () => {
//         this.setState({
//             marks: []
//         });
//     };


//     render() {
//         const { marks } = this.state;
//         return (
//             <div>
//                 <button onClick={this.deleteMark}>DELETE MARKS</button>
//                 <Map
//                     googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyCyX_WgsCr5PP29JQPjf_gG4oZF2n4OSUg"
//                     loadingElement={<div style={{ height: `100%` }} />}
//                     containerElement={<div style={{ height: `400px` }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                     onMapClick={this.setMark}
//                     marks={marks}
//                 />
//             </div>
//         );
//     }
// }

// export default ReportsPage;