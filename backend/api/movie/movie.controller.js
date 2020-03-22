const movieService = require('./movie.service')
const logger = require('../../services/logger.service')

async function getMovie(req, res) {
    const movie = await movieService.getById(req.params.id)
    res.send(movie)
}

async function getMovies(req, res) {
    console.log(req.query);
    const movies = await movieService.query(req.query)
    res.send(movies)
}

async function deleteMovie(req, res) {
    await movieService.remove(req.params.id)
    res.end()
}

async function updateMovie(req, res) {
    const product = req.body;
    const id = req.params.id
    const newMovie = await movieService.update(id, product)
    await res.send(newMovie)
}

async function addMovie(req, res) {
    var movie = req.body;
    movie = await movieService.add(movie)
    res.send(movie)
}

module.exports = {
    getMovie,
    getMovies,
    deleteMovie,
    updateMovie,
    addMovie
}