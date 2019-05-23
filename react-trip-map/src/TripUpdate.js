import React, { Component } from "react";
import "./Create.css";
import Axios from "axios";
import Map from "./Map";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./TripUpdate.css";
// import StarRatings from './react-star-ratings'

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateCity: "",
            personName: "",
            email: "",
            countryVisited: "",
            stateVisited: "",
            cityVisited: "",
            lng: "",
            lat: "",
            dateVisited: "",
            stayedAt: "",
            image: "",
            activities: "",
            comments: "",
            rating: "",
            redirect: false
        };
    }
    change = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    };

    getSubmit = evt => {
        evt.preventDefault();
        Axios.put(
            `https://project3-trip-api.herokuapp.com/api/trips/updateTrip/${
            this.state.updateCity
            }`,
            this.state
        ).then(res => {
            this.setState({ redirect: true });
            this.props.showAllTrips();
            console.log(this.props);
            console.log(res);
        });
    };

    render() {
        if (this.state.redirect) return <Redirect to="/map" />;
        else
            return (
                <div className="Main">
                    <h1>Update Trip</h1>
                    <label htmlFor="updateCity">City to Update: </label>
                    <input
                        value={this.state.updateCity}
                        type="text"
                        className="updateInput"
                        name="updateCity"
                        onChange={this.change}
                    />
                    <form
                        className="formContainer3"
                        onSubmit={this.getSubmit}
                        onChange={this.change}
                    >
                        <div className="updateForm1">
                            <label htmlFor="personName">Name:</label>
                            <input
                                value={this.state.personName}
                                type="text"
                                className="updateInput"
                                name="personName"
                                onChange={this.change}
                            />
                            <label htmlFor="email">Email:</label>
                            <input
                                value={this.state.email}
                                type="text"
                                className="updateInput"
                                name="email"
                                onChange={this.change}
                            />
                            <label htmlFor="countryVisited">Country Visited:</label>
                            <input
                                value={this.state.countryVisited}
                                type="text"
                                className="updateInput"
                                name="countryVisited"
                                onChange={this.change}
                            />
                            <label htmlFor="stateVisited">State Visited:</label>
                            <input
                                value={this.state.stateVisited}
                                type="text"
                                className="updateInput"
                                name="stateVisited"
                                onChange={this.change}
                            />
                            <label htmlFor="cityVisited">City Visited:</label>
                            <input
                                value={this.state.cityVisited}
                                type="text"
                                className="updateInput"
                                name="cityVisited"
                                onChange={this.change}
                            />

                            <label htmlFor="lng">Latitude:</label>
                            <input
                                value={this.state.lat}
                                type="text"
                                className="updateInput"
                                name="lat"
                                onChange={this.change}
                            />

                            <label htmlFor="lng">Longitude:</label>
                            <input
                                value={this.state.lng}
                                type="text"
                                className="updateInput"
                                name="lng"
                                onChange={this.change}
                            />
                        </div>
                        <div className="updateForm2">
                            <label htmlFor="dateVisited">Date:</label>
                            <input
                                value={this.state.dateVisisted}
                                type="text"
                                className="updateInput"
                                name="logo"
                                onChange={this.change}
                            />
                            <label htmlFor="stayedAt">Stayed At:</label>
                            <input
                                value={this.state.stayedAt}
                                type="text"
                                className="updateInput"
                                name="stayedAt"
                                onChange={this.change}
                            />
                            <label htmlFor="image">Image</label>
                            <input
                                value={this.state.image}
                                type="text"
                                className="updateInput"
                                name="image"
                                onChange={this.change}
                            />
                            <label htmlFor="activities">Activities:</label>
                            <input
                                value={this.state.activities}
                                type="text"
                                className="updateInput"
                                name="activities"
                                onChange={this.change}
                            />
                            <label htmlFor="comments">Comments:</label>
                            <input
                                value={this.state.comments}
                                type="text"
                                className="updateInput"
                                name="comments"
                                onChange={this.change}
                            />
                            <label htmlFor="rating">Rating:</label>
                            <input
                                value={this.state.rating}
                                type="text"
                                className="updateInput"
                                name="rating"
                                onChange={this.change}
                            />
                            <button className="updateButton" type="submit">
                                Submit
            </button>
                        </div>
                    </form>
                </div>
            );
    }
}

export default Create;
