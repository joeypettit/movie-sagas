import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// ~~~~~~~~ REDUX SAGAS ~~~~~~~~~~

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
}

function* fetchMovieDetails(action){
    try{
        let response = yield axios.get(`/api/details/${action.payload}`); // request movie details using id
        yield put({ type: 'SET_DETAILS', payload: response.data }); // dispatch response to store
    } catch (error) {
        console.log("Error with fetchDetails reducer", error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// ~~~~~~~~~~ REDUX REDUCERS ~~~~~~~~~~~

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// details reducer holds all data necessary to build the details view
// for the selected movie. It stores it in an object like this...
    // {
    //     title: ''
    //     poster: 'image/path'
    //     description: 
    //     genres: []
    // }
const details = (state={}, action) => {
    if(action.type === 'SET_DETAILS'){
        // console.log('in details reducer payload is:', action.payload);
        return action.payload
    }
    return state;
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
