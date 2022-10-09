const express = require('express');
const { query } = require('../modules/pool');
const router = express.Router();
const pool = require('../modules/pool')


// this function will query to select all possible genre names from "genres" table
router.get('/', (req, res) => {
  let queryText = `SELECT "genres"."name" FROM "genres";`
  pool.query(queryText)
  .then((response) =>{
    console.log('Select all genres successful', response);
    res.send(response);
  }).catch((error) => console.log('Error with select * genres', error));
});


// this route will query all the genres of the movie with the id found in the url param
router.get('/:movieid', (req, res) => {
  let movieId = req.params.movieid
  let queryText = `SELECT "genres"."name" AS "movie_genres" FROM "genres"
                  JOIN "movies_genres" ON "genres"."id"="movies_genres"."genre_id"
                  WHERE "movie_id"=$1;`
  pool.query(queryText, [movieId])
  .then((response)=>{
    console.log('get this movies genres response:', response);
    res.send(response);
  }).catch((error)=> console.log('Error with get this movie genre', error));
})

module.exports = router;