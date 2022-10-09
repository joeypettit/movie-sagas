import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsView(){
    const {movieid} = useParams(); // grab id from url param
    const dispatch = useDispatch(); // create dispatch
    const movieDetails = useSelector(store=>store.details); // select details from redux store

    console.log('these are movie details', movieDetails);

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
            <div>ID IS: {movieid}</div>
            <h2 className="details-title">Movie Title</h2>
            <p className="details-description">description here</p>
            <img className="details-img"/>
            <div className="genre-holder">
                <div className="genre-tag">Genre 1</div>
                <div className="genre-tag">Genre 2</div>
            </div>
            <button className="details-return-btn">Return to library</button>
        </div>
    )
}
export default DetailsView;