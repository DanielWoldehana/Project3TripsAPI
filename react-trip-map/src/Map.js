import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        let allTrips = this.props.Trips.map((trips) => {
            console.log(trips)
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
            )
        })


        return (
            <div>
                {allTrips}
            </div>
        );
    }
}

export default Map;