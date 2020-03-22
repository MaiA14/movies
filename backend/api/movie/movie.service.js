const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    remove,
    update,
    add,
}

async function query(params) {
    const collection = await dbService.getCollection('movie')
    try {
        const movies = await collection.find().sort({ releaseYear: -1 }).toArray();
        return movies
    } catch (err) {
        console.log('ERROR: cannot find movies')
        throw err;
    }
}

async function getById(movieId) {
    const collection = await dbService.getCollection('movie')
    try {
        const movie = await collection.findOne({ "_id": ObjectId(movieId) })
        return movie
    } catch (err) {
        console.log(`ERROR: while finding movie ${movieId}`)
        throw err;
    }
}

async function remove(movieId) {
    const collection = await dbService.getCollection('movie')
    try {
        await collection.deleteOne({ "_id": ObjectId(movieId) })
    } catch (err) {
        console.log(`ERROR: cannot remove movie ${movieId}`)
        throw err;
    }
}

async function update(id, movie) {
    const collection = await dbService.getCollection('movie')
    delete movie._id
    try {
        await collection.replaceOne({ "_id": ObjectId(id) }, { $set: movie })
        movie._id = id;
        return movie
    } catch (err) {
        console.log(`ERROR: cannot update movie ${movie._id}`)
        throw err;
    }
}

async function add(movie) {
    const collection = await dbService.getCollection('movie')
    try {
        await collection.insertOne(movie);
        return movie;
    } catch (err) {
        console.log(`ERROR: cannot insert movie`)
        throw err;
    }
}