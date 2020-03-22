import React from 'react';
import { Link } from 'react-router-dom'

import './MoviePreview.css';

export default function MoviePreview(props) {

    return (
        <Link to={`/movies/${props.movie._id}`}>
            <div className="movie-preview">
                <img src={props.movie.image}></img>
            </div>
        </Link>

    )
}

