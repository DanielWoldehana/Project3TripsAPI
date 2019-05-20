import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

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
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}

>
        <Marker
        onClick={this.onMarkerClick}
        name={'Kenyatta International Convention Centre'}
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