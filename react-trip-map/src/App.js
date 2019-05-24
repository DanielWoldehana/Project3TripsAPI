import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Create from "./Create";
import Map from "./Map";
import Axios from "axios";
import fire from "./config/fire";
import TripUpdate from "./TripUpdate";
import Login from "./Login";

const url = "https://trips-tracker-api.herokuapp.com/api/trips";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div className="App">
        <header className="header">
          <Link className="title" to="/">
            Mark Your Travels!
          </Link>
          <div className="logOut">
            <button onClick={this.logout} type="submit" className="home">
              Log Out
            </button>
          </div>
        </header>
        <nav>
          <Link className="tripUpdate" to="/tripUpdate">
            Trip Update
          </Link>
          <Link className="Add" to="/create">
            Add Trip
          </Link>
          <Link className="Map" to="/">
            My Map
          </Link>
          <div className="dropdown">
            <button className="dropbtn">
              Instructions
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <ul>
                <li>Use any email to create an account</li>
                <li>Password must be at least 6 characters</li>
                <li>Click "Add Trip"</li>
                <li>Complete Form</li>
                <li>Submit to add pin to map</li>
                <li> If update needed, click "Trip Update" and fill every field in </li>
                <li> To delete a pin, find city in dropdown menu and hit the delete button</li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          <div className="AllPages">
            {this.state.user ? (
              <Switch>
                <Route
                  exact
                  path="/tripUpdate"
                  render={routerProps => (
                    <TripUpdate
                      {...routerProps}
                      showAllTrips={this.showAllTrips}
                    />
                  )}
                />
                <Route
                  exact
                  path="/create"
                  render={routerProps => (
                    <Create {...routerProps} showAllTrips={this.showAllTrips} />
                  )}
                />
                <Route exact path="/map" render={() => <Redirect to="/" />} />
                <Route
                  exact
                  path="/"
                  render={routerProps => (
                    <Map
                      {...routerProps}
                      {...this.state}
                      showAllTrips={this.showAllTrips}
                    />
                  )}
                />
              </Switch>
            ) : (
              <Login />
            )}
          </div>
        </main>
        <footer>© 2019 Daniel Woldehana, Zachary Lessner, Devin Mauk</footer>
      </div>
    );
  }
}
export default App;
