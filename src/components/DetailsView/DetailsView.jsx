import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsView(){
    const {movieid} = useParams(); // grab id from url param
    const dispatch = useDispatch(); // create dispatch
    const movieDetails = useSelector(store=>store.details); // select details from redux store

    console.log('these are movie details', movieDetails);
    console.log('object length', Object.keys(movieDetails))

    // dispatch movie id to saga to GET details and
    // SET to state in details reducer (redux)
    function fetchDetails(){
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movieid
        });
    }
    

    // fetch details on first render
    useEffect(()=>fetchDetails(), []);

    return(
        // array.map all genres
        <div id="details-view">
            <h2 className="details-title">{movieDetails.title}</h2>
            <p className="details-description">{movieDetails.description}</p>
            <img className="details-img" src={movieDetails.poster}/>
            <div className="genre-holder">
                {Object.keys(movieDetails).length===0 
                ? null 
                : movieDetails.genres.map((genre, index)=>{
                    return <div key={index} className='genre-tag'>{genre}</div>
                })}
            </div>
            <button className="details-return-btn">Return to library</button>
        </div>
    )
}
export default DetailsView;