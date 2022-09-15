import { combineReducers } from 'redux';

const moviesReducer = (moviesReducer = {movies: null}, action) => {
    if (action.type === 'FETCH_MOVIES')
        return { movies: action.payload }

    return { movies: moviesReducer.movies }
};

const movieReviewsReducer = (movieReviewsReducer = {reviews: null}, action) => {
    if (action.type === 'FETCH_MOVIE_REVIEWS')
        return { reviews: action.payload }
    
    return { reviews: movieReviewsReducer.reviews }
}

const formValueReducer = (formValueReducer = {form_value: {}}, action) => {
    if (action.type === 'POPULATE_FORM')
        return { form_value: action.payload }

    return { form_value: formValueReducer.form_value }
};

const submitFormReducer = (submitFormReducer = {status: false}, action) => {
    if (action.type === 'SUBMIT_FORM'){
        if(action.payload.request.data !== '' && action.payload.request.status === 200)
            submitFormReducer.status = true;

        return { status: submitFormReducer.status }
    }

    return { status: submitFormReducer.status }
};

export default combineReducers({
    movies_reducer: moviesReducer,
    movie_reviews_reducer: movieReviewsReducer,
    form_value_reducer: formValueReducer,
    submit_form_reducer: submitFormReducer
});