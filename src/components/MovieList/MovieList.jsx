import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const [detailedMovie, setDetailedMovie]=useState('none');

    function enterDetailsView(movieId){
        console.log('in enterDetailsView, id is:', movieId);
        let action ={
            type: 'BUILD_DETAILS',
            payload: movieId
        }

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
                        <div key={movie.id} onClick={()=>enterDetailsView(movie)}>
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