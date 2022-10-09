import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './MovieList.css'
import {useHistory} from 'react-router-dom';

function MovieList() {
    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const [detailedMovie, setDetailedMovie]=useState('none');


    // this function will push user to details page for this movie
    // it will also dispatch fetch actions which will build a details
    // object for the movie send it to the detailsReducer
    function enterDetailsView(movieId){
        

         // push to details page
    }



    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    console.log('this is movie', movie);
                    return (
                        <div key={movie.id} onClick={()=> history.push(`/details/${movie.id}`)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;