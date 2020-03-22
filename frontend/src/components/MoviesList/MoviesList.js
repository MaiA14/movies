import React from 'react'

import MoviePreview from '../MoviePreview/MoviePreview';
import './MoviesList.css';

export default function MoviesList(props) {
    return <div className="movies-list">
        {props.movies.map((movie, i) =>
            <MoviePreview key={i} movie={movie} />)}
    </div>
}