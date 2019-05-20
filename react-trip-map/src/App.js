import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Title</h1>
      </header>
      <nav>
        <button type='submit'>Search</button>
        <input className="Search" type='Text' />
        <h3 className="Add"> Add Trip</h3>
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
      </div>
    </div>
  );
}

export default App;
