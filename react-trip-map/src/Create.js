import React, { Component } from "react";
import "./Create.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";
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
    if (this.state.cityVisited === "") {
      return alert("Please enter in a City");
    }

    let url = "https://project3-trip-api.herokuapp.com/api/trips/create";
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
            <h1>New Trip</h1>
            <label htmlFor="personName">Name:</label>
            <input
              placeholder="Enter Name"
              value={this.state.personName}
              type="text"
              className="createInput"
              name="personName"
              onChange={this.change}
            />
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Enter Email"
              value={this.state.email}
              type="text"
              className="createInput"
              name="email"
              onChange={this.change}
            />
            <label htmlFor="countryVisited">Country Visited:</label>
            <input
              placeholder="Enter Country Visited"
              value={this.state.countryVisited}
              type="text"
              className="createInput"
              name="countryVisited"
              onChange={this.change}
            />
            <label htmlFor="stateVisited">State Visited:</label>
            <input
              placeholder="Enter State Visited"
              value={this.state.stateVisited}
              type="text"
              className="createInput"
              name="stateVisited"
              onChange={this.change}
            />
            <label htmlFor="cityVisited">City Visited:</label>
            <input
              placeholder="Enter City Visited"
              value={this.state.cityVisited}
              type="text"
              className="createInput"
              name="cityVisited"
              onChange={this.change}
            />

            <label htmlFor="lng"><a className="LatLink" target="_blank" href="https://www.latlong.net/">Latitude:</a></label>
            <input
              placeholder="Click Label above to find Coordinates"
              value={this.state.lat}
              type="text"
              className="createInput"
              name="lat"
              onChange={this.change}
            />

            <label htmlFor="lng"><a className="LatLink" target="_blank" href="https://www.latlong.net/">Longitude:</a></label>
            <input
              placeholder="Click Label above to find Coordinates"
              value={this.state.lng}
              type="text"
              className="createInput"
              name="lng"
              onChange={this.change}
            />

            <label htmlFor="dateVisited">Date:</label>
            <input
              placeholder="Enter Date Visited"
              value={this.state.dateVisisted}
              type="text"
              className="createInput"
              name="logo"
              onChange={this.change}
            />
            <label htmlFor="stayedAt">Stayed At:</label>
            <input
              placeholder="Enter Place Stayed at"
              value={this.state.stayedAt}
              type="text"
              className="createInput"
              name="stayedAt"
              onChange={this.change}
            />
            <label htmlFor="image">Image</label>
            <input
              placeholder="Enter Image Link"
              value={this.state.image}
              type="text"
              className="createInput"
              name="image"
              onChange={this.change}
            />
            <label htmlFor="activities">Activities:</label>
            <input
              placeholder="Enter in Activities"
              value={this.state.activities}
              type="text"
              className="createInput"
              name="activities"
              onChange={this.change}
            />
            <label htmlFor="comments">Comments:</label>
            <input
              placeholder="Enter Review/Comments"
              value={this.state.comments}
              type="text"
              className="createInput"
              name="comments"
              onChange={this.change}
            />
            <label htmlFor="rating">Rating:</label>
            <input
              placeholder="Enter a Rating from 0 - 5"
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
