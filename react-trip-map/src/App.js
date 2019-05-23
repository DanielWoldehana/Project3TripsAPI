import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Create from "./Create";
import Map from "./Map";
import Axios from "axios";
import fire from "./config/fire";
import TripUpdate from "./TripUpdate";
import Login from "./Login";

const url = "https://project3-trip-api.herokuapp.com/api/trips";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteCity: "",
      Trips: [],
      user: {}
    };
  }

  showAllTrips = () => {
    Axios.get(url).then(res => {
      this.setState({
        Trips: res.data
      });
    });
  };

  componentDidMount() {
    this.authListener();
    this.showAllTrips();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  logout = () => {
    fire.auth().signOut();
  };

  handleChange = evt => {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(this.state.deleteCity);
  };

  handleDelete = () => {
    Axios.delete(
      `https://project3-trip-api.herokuapp.com/api/trips/delete/${
        this.state.deleteCity
      }`
    ).then(ph => {
      console.log(ph);
      this.showAllTrips();
      this.setState({ deleteCity: "" });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <Link className="title" to="/">
            Mark Your Travels!
          </Link>
          <div className="logOut">
            <button onClick={this.logout} type="submit">
              Log Out
            </button>
          </div>
        </header>
        <nav>
          <button
            onClick={this.handleDelete}
            className="searchBttn"
            type="submit"
          >
            Delete
          </button>
          <input
            value={this.state.deleteCity}
            name="deleteCity"
            onChange={this.handleChange}
            className="Search"
            type="Text"
            placeholder="Enter name of City"
          />
          <Link className="tripUpdate" to="/tripUpdate">
            Update Trip
          </Link>
          <Link className="Add" to="/create">
            Add Trip
          </Link>
          <Link className="Map" to="/map">
            My Map
          </Link>
          <div className="dropdown">
            <button className="dropbtn">
              Instructions
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <ul>
                <li>Click "Add Trip"</li>
                <li>Complete Form</li>
                <li>Submit</li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="AllPages">
          {this.state.user ? (
            <Switch>
              <Route
                exact
                path="/tripUpdate"
                render={routerProps => (
                  <TripUpdate {...routerProps} {...this.showAllTrips} />
                )}
              />
              <Route
                exact
                path="/create"
                render={routerProps => (
                  <Create {...routerProps} showAllTrips={this.showAllTrips} />
                )}
              />
              <Route
                exact
                path="/map"
                render={routerProps => <Map {...routerProps} {...this.state} />}
              />
            </Switch>
          ) : (
            <Login />
          )}
        </div>
      </div>
    );
  }
}
export default App;
