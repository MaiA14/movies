import axios from 'axios';
import HttpService from './HttpService.js'

var Axios = axios.create({
    withCredentials: true
});

export default {
    query,
    getMovieById,
}

function query() {
    return HttpService.get(`movie`)
}

function getMovieById(movieId) {
    return HttpService.get(`movie/${movieId}`)
}
