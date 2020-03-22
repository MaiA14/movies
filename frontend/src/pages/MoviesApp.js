import React, { Component } from 'react'

import movieService from '../services/movieService';
import MoviesList from '../components/MoviesList/MoviesList';


export default class Feed extends Component {

    state = {
        movies: [],
    }

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies = () => {
        movieService.query().then((movies) => {
            this.setState({ movies });
        })
    }

    render() {
        return (
            <div>
                <div className="app-header">MovieLand</div>
                <MoviesList movies={this.state.movies} />
            </div>
        )
    }
}