import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Create from './Create';

class App extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <Link className="title" to='/'><h1>Title</h1></Link>
        </header>
        <nav>
          <button type='submit'>Search</button>
          <input className="Search" type='Text' />
          <Link className="Add" to='/create'>
            <h3>Add Trip</h3>
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
