import React, { Component } from 'react';
import './Create.css'

class Create extends Component {
    render() {
        return (
            <div className='formContainer'>
                <form>
                    <h1>New Trip</h1>
                    <label htmlFor="personName">Name:</label><br></br>
                    <input className="createInput" name="personName" /><br></br>
                    <label htmlFor="email">Email:</label><br></br>
                    <input className="createInput" name="email" /><br></br>
                    <label htmlFor="countryVisited">Country Visited:</label><br></br>
                    <input className="createInput" name="countryVisited" /><br></br>
                    <label htmlFor="stateVisited">State Visited:</label><br></br>
                    <input className="createInput" name="stateVisited" /><br></br>
                    <label htmlFor="cityVisited">City Visited:</label><br></br>
                    <input className="createInput" name="cityVisited" /><br></br>
                    <label htmlFor="dateVisited">Date:</label><br></br>
                    <input className="createInput" name="logo" /><br></br>
                    <label htmlFor="stayedAt">Stayed At:</label><br></br>
                    <input className="createInput" name="stayedAt" /><br></br>
                    <label htmlFor="img">Image</label><br></br>
                    <input className="createInput" name="img" /><br></br>
                    <label htmlFor="activities">Activities:</label><br></br>
                    <input className="createInput" name="activities" /><br></br>
                    <label htmlFor="review">Review</label><br></br>
                    <input className="createInput" name="review" /><br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Create;