import React from 'react';

import './MovieDetails.css'

export default class MovieDetails extends React.Component {
    render() {
        const { movie } = this.props;
        return (<div className="movie-details-container">
            <h2>{movie.title}</h2>
            <img src={movie.image} className="details-movie-image"></img>
            <div className="movie-details">
                <div>Rating: {movie.rating}</div>
                <div>Release year: {movie.releaseYear}</div>
                <div>genre: {(movie.genre).toString()}</div>
                <button onClick={this.props.goBack} className="back-btn">Back</button>
            </div>
        </div>
        )
    }
}