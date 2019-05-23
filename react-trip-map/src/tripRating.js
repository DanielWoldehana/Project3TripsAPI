// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// // import StarRatings from './react-star-ratings'

// class tripRating extends Component {
//     constructor() {
//         super()
//         this.state = {
//             rating: 1
//         }
//     }

//     onStarClick(nextValue, prevValue, name) {
//         this.setState({ rating: nextValue })
//     }

//     render() {
//         const { rating } = this.state
//         return (
//             <div className='starRating'>
//                 <h2>Rating: {rating}</h2>
//                 <StarRatings
//                     name='rate1'
//                     starCount={5}
//                     value={rating}
//                     onStarClick={this.onStarClick.bind(this)}
//                 />

//             </div>
//         );

//     }
// }

// export default tripRating;