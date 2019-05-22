import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Create from './Create';
import Map from './Map';
import Axios from 'axios';
import fire from './config/fire'
import Login from './Login'

const url = "https://project3-trip-api.herokuapp.com/api/trips"

class App extends Component {
  constructor() {
    super()
    this.state = {
      Trips: [],
      user: {}
    }
  }

  showAllTrips = () => {
    Axios.get(url).then(res => {
      this.setState({
        Trips: res.data
      })
  })
  }

  componentDidMount() {
    this.authListener()
    this.showAllTrips()
    // Axios.get(url).then(res => {
    //   this.setState({
    //     Trips: res.data
    //   })
    //   // console.log(this.state.Trips)
    // })
  }


  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <Link className="title" to='/'>Mark Your Travels!</Link>
          <div className='logOut'>
            <button onClick={this.logout} type='submit'>Log Out</button>
          </div>
        </header>
        <nav>
          <button className='searchBttn' type='submit'>Search</button>
          <input className="Search" type='Text' />
          <Link className="Add" to='/create'>
            Add Trip
          </Link>
          <Link className="Map" to='/map'>My Map</Link>
          <div className="dropdown">
            <button className="dropbtn">Instructions
            <i className="fa fa-caret-down"></i>
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
          {this.state.user ?
            <Switch>
              <Route exact path='/create' render={(routerProps) => <Create {...routerProps} showAllTrips={this.showAllTrips}/>} />
              <Route exact path='/map' render={(routerProps) => <Map {...routerProps} {...this.state} />} />
            </Switch>
            : <Login />}
        </div>
      </div>
    );
  }
}
export default App;
