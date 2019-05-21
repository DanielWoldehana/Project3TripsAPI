import React, { Component } from 'react';
import './Create.css'
import Axios from 'axios'
// import StarRatings from './react-star-ratings'
import TripRating from './tripRating'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personName: '',
            email: '',
            countryVisited: '',
            stateVisited: '',
            cityVisited: '',
            dateVisited: '',
            stayedAt: '',
            image: '',
            activities: '',
            comments: '',
            rating: ''
        }


    }
    change = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getSubmit = (evt) => {
        evt.preventDefault()
        let url = "https://project3-trip-api.herokuapp.com/api/trips"
        Axios.post(url, this.state).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <form className='formContainer' onSubmit={this.getSubmit}>
                    <h1>New Trip</h1>
                    <label htmlFor="personName">Name:</label>
                    <input value={this.state.personName} type="text" className="createInput" name="personName" onChange={this.change} />
                    <label htmlFor="email">Email:</label>
                    <input value={this.state.email} type="text" className="createInput" name="email" onChange={this.change} />
                    <label htmlFor="countryVisited">Country Visited:</label>
                    <input value={this.state.countryVisited} type="text" className="createInput" name="countryVisited" onChange={this.change} />
                    <label htmlFor="stateVisited">State Visited:</label>
                    <input value={this.state.stateVisited} type="text" className="createInput" name="stateVisited" onChange={this.change} />
                    <label htmlFor="cityVisited">City Visited:</label>
                    <input value={this.state.cityVisited} type="text" className="createInput" name="cityVisited" onChange={this.change} />
                    <label htmlFor="dateVisited">Date:</label>
                    <input value={this.state.dateVisisted} type="text" className="createInput" name="logo" onChange={this.change} />
                    <label htmlFor="stayedAt">Stayed At:</label>
                    <input value={this.state.stayedAt} type="text" className="createInput" name="stayedAt" onChange={this.change} />
                    <label htmlFor="image">Image</label>
                    <input value={this.state.image} type="text" className="createInput" name="image" onChange={this.change} />
                    <label htmlFor="activities">Activities:</label>
                    <input value={this.state.activities} type="text" className="createInput" name="activities" onChange={this.change} />
                    <label htmlFor="comments">Comments:</label>
                    <input value={this.state.comments} type="text" className="createInput" name="comments" onChange={this.change} />
                    <label htmlFor="rating">Rating:</label>
                    <input value={this.state.rating} type="text" className="createInput" name="rating" onChange={this.change} />
                    {/* <div className='starRating'>
                        <h2>Rating: {this.state.review.rating}</h2>
                        <StarRatings
                            name='rate1'
                            starCount={5}
                            value={this.state.review.rating}
                            onStarClick={this.onStarClick.bind(this)}
                        />

                    </div> */}
                    <button className="createButton" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Create;