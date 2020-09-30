import React from 'react';

import  movieService from '../services/movieService';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Spinner from '../components/Spinner/Spinner';

export default class MoviePage extends React.Component {

    state = {
        movie: null
    }
    componentDidMount() {
        this.loadMovie();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadMovie();
        }
    }

    loadMovie() {
        const { id } = this.props.match.params;
        movieService.getMovieById(id).then(movie => {
            this.setState({ movie })
        })
    }

    goBack = () => {
        this.props.history.push('/movies')
        // this.props.history.goBack()
    }

    render() {
        if (!this.state.movie) return <Spinner></Spinner>
        return <MovieDetails movie={this.state.movie}  goBack={this.goBack}></MovieDetails>
    }
}
