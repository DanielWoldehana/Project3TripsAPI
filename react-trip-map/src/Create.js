import React, { Component } from 'react';
import './Create.css'

class Create extends Component {
    render() {
        return (
            <div>
                <form className='formContainer'>
                    <h1>New Trip</h1>
                    <label htmlFor="personName">Name:</label>
                    <input type="text" className="createInput" name="personName" />
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="createInput" name="email" />
                    <label htmlFor="countryVisited">Country Visited:</label>
                    <input type="text" className="createInput" name="countryVisited" />
                    <label htmlFor="stateVisited">State Visited:</label>
                    <input type="text" className="createInput" name="stateVisited" />
                    <label htmlFor="cityVisited">City Visited:</label>
                    <input type="text" className="createInput" name="cityVisited" />
                    <label htmlFor="dateVisited">Date:</label>
                    <input type="text" className="createInput" name="logo" />
                    <label htmlFor="stayedAt">Stayed At:</label>
                    <input type="text" className="createInput" name="stayedAt" />
                    <label htmlFor="img">Image</label>
                    <input type="text" className="createInput" name="img" />
                    <label htmlFor="activities">Activities:</label>
                    <input type="text" className="createInput" name="activities" />
                    <label htmlFor="review">Review</label>
                    <input type="text" className="createInput" name="review" />
                    <label htmlFor="rating">Rating</label>
                    <input type="text" className="createInput" name="rating"></input>
                    <button className="createButton" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Create;