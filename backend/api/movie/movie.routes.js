const express = require('express')
const { getMovies, getMovie, deleteMovie, updateMovie, addMovie } =
    require('./movie.controller')
const router = express.Router()

router.get('/', getMovies)
router.get('/:id', getMovie)
router.put('/:id', updateMovie)
router.delete('/:id', deleteMovie)
router.post('/', addMovie)

module.exports = router