import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Create from './Create';
import Axios from 'axios';

const url = "https://project3-trip-api.herokuapp.com/api/trips"

class App extends Component {
  constructor() {
    super()
    this.state = {
      Trips: []
    }
  }
  componentDidMount() {
    Axios.get(url).then(res => {
      this.setState({
        Trips: res.data
      })
      console.log(this.state.Trips)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <Link className="title" to='/'>Title</Link>
        </header>
        <nav>
          <button type='submit'>Search</button>
          <input className="Search" type='Text' />
          <Link className="Add" to='/create'>
            Add Trip
          </Link>
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
        <div className="Map-Container">
          {/* <Route exact path='/' Component={Map} /> */}
          <Route exact path='/create' component={Create} />
        </div>
      </div>
    );
  }
}
export default App;
