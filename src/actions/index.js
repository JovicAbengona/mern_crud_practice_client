import MoviesAPI from '../api/Movies';

export const fetchMovies = () => {
    return async (dispatch) => {
        const response = await MoviesAPI.get('/api/get_movies');
        dispatch({ type: 'FETCH_MOVIES', payload: response.data });
    };
};

export const fetchMovieReviews = () => {
    return async (dispatch) => {
        const response = await MoviesAPI.get('/api/get_reviews');
        dispatch({ type: 'FETCH_MOVIE_REVIEWS', payload: response.data });
    };
};

export const populateForm = (form_value, name, value) => {
    form_value[name] = value;

    return async (dispatch) => {
        dispatch({ type: 'POPULATE_FORM', payload: form_value });
    };
};

export const submitForm = (form_value) => {
    return async (dispatch) => {
        const response = await MoviesAPI.post('/api/create_rating', {form_data: form_value});

        dispatch({ type: 'SUBMIT_FORM', payload: response });
    };
};