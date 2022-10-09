const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// this function will query to select all possible genre names from "genres" table
router.get('/', (req, res) => {
  let queryText = `SELECT "genres"."name" FROM "genres";`
  pool.query(queryText)
  .then((response) =>{
    console.log('Select all genres successful', response.rows);
    res.send(response.rows);
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
    // convert response.rows into an array of genres (rather than an array of objects)
    let genres = [];
    for(let obj of response.rows){
      genres.push(obj.movie_genres);
    }
  
    res.send(genres);
  }).catch((error)=> console.log('Error with get this movie genre', error));
})

module.exports = router;