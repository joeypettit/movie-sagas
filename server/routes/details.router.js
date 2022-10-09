const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// this route will query the movie title, poster, description, and all the genres of the movie 
// with the id found in the url param. It will send back an object like this...
// { 
//     "id": 1,
//     "title": "Avatar",
//     "poster": "images/avatar.jpeg",
//     "description": "description",
//     "genres": ["Adventure", "Biographical", "Comedy"]
// }

router.get('/:movieid', (req, res) => {
    // variables needed
    let movieId = req.params.movieid
    let movieDetails = {};
    let genres = [];

    // first query will grab the movies genres and put them into an array
    let queryOne = `SELECT "genres"."name" AS "movie_genres" FROM "genres"
                    JOIN "movies_genres" ON "genres"."id"="movies_genres"."genre_id"
                    WHERE "movie_id"=$1;`
    pool.query(queryOne, [movieId])
    .then((response)=>{
      // convert response.rows into an array of genres (rather than an array of objects)
      for(let obj of response.rows){
        genres.push(obj.movie_genres);
      }

        // second query grabs movie's title, descript, and poster
        let queryTwo = `SELECT * FROM "movies" WHERE "id"=$1;`
        pool.query(queryTwo, [movieId])
        .then((response)=>{
            movieDetails = response.rows[0]; // assign to movieDetails
            movieDetails.genres = genres; // add genre array 

            res.send(movieDetails) // send details back to client

        }).catch((error)=>console.log('Error with getting details', error));
    }).catch((error)=> console.log('Error with get this movie genre', error));
});





module.exports = router;