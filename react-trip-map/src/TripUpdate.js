import React, { Component } from "react";
import "./Create.css";
import Axios from "axios";
import Map from "./Map";
import { Route, Link, Switch, Redirect } from "react-router-dom";
// import StarRatings from './react-star-ratings'

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        let url = "https://project3-trip-api.herokuapp.com/api/trips/tripUpdate";
        Axios.post(url, this.state).then(res => {
            console.log(res);
        });
        this.setState({ redirect: true });
        this.props.showAllTrips();
        console.log(this.props);
    };

    render() {
        if (this.state.redirect) return <Redirect to="/map" />;
        else
            return (
                <div>
                    <form
                        className="formContainer"
                        onSubmit={this.getSubmit}
                        onChange={this.change}
                    >
                        <h1>Update Trip</h1>
                        <label htmlFor="personName">Name:</label>
                        <input
                            value={this.state.personName}
                            type="text"
                            className="createInput"
                            name="personName"
                            onChange={this.change}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            value={this.state.email}
                            type="text"
                            className="createInput"
                            name="email"
                            onChange={this.change}
                        />
                        <label htmlFor="countryVisited">Country Visited:</label>
                        <input
                            value={this.state.countryVisited}
                            type="text"
                            className="createInput"
                            name="countryVisited"
                            onChange={this.change}
                        />
                        <label htmlFor="stateVisited">State Visited:</label>
                        <input
                            value={this.state.stateVisited}
                            type="text"
                            className="createInput"
                            name="stateVisited"
                            onChange={this.change}
                        />
                        <label htmlFor="cityVisited">City Visited:</label>
                        <input
                            value={this.state.cityVisited}
                            type="text"
                            className="createInput"
                            name="cityVisited"
                            onChange={this.change}
                        />

                        <label htmlFor="lng">Latitude:</label>
                        <input
                            value={this.state.lat}
                            type="text"
                            className="createInput"
                            name="lat"
                            onChange={this.change}
                        />

                        <label htmlFor="lng">Longitude:</label>
                        <input
                            value={this.state.lng}
                            type="text"
                            className="createInput"
                            name="lng"
                            onChange={this.change}
                        />

                        <label htmlFor="dateVisited">Date:</label>
                        <input
                            value={this.state.dateVisisted}
                            type="text"
                            className="createInput"
                            name="logo"
                            onChange={this.change}
                        />
                        <label htmlFor="stayedAt">Stayed At:</label>
                        <input
                            value={this.state.stayedAt}
                            type="text"
                            className="createInput"
                            name="stayedAt"
                            onChange={this.change}
                        />
                        <label htmlFor="image">Image</label>
                        <input
                            value={this.state.image}
                            type="text"
                            className="createInput"
                            name="image"
                            onChange={this.change}
                        />
                        <label htmlFor="activities">Activities:</label>
                        <input
                            value={this.state.activities}
                            type="text"
                            className="createInput"
                            name="activities"
                            onChange={this.change}
                        />
                        <label htmlFor="comments">Comments:</label>
                        <input
                            value={this.state.comments}
                            type="text"
                            className="createInput"
                            name="comments"
                            onChange={this.change}
                        />
                        <label htmlFor="rating">Rating:</label>
                        <input
                            value={this.state.rating}
                            type="text"
                            className="createInput"
                            name="rating"
                            onChange={this.change}
                        />

                        <button className="createButton" type="submit">
                            Submit
            </button>
                    </form>
                </div>
            );
    }
}

export default Create;
