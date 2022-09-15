import MoviesAPI from '../api/Movies';

export const fetchMovies = () => {
    return async (dispatch) => {
        const response = await MoviesAPI.get('/api/get_movies');
        dispatch({ type: 'FETCH_MOVIES', payload: response.data[0] });
    };
};

export const fetchMovieReviews = () => {
    return async (dispatch) => {
        const response = await MoviesAPI.get('/api/get_reviews');
        dispatch({ type: 'FETCH_MOVIE_REVIEWS', payload: response.data[0] });
    };
};

export const populateForm = (form_value, name, value) => {
    form_value[name] = value;

    return async (dispatch) => {
        dispatch({ type: 'POPULATE_FORM', payload: form_value });
    };
};

export const submitForm = (submit_type, form_value) => {
    return async (dispatch) => {
        let url = (submit_type === 'rate_movie') ? '/api/create_rating' : '/api/add_movie';
        const response = await MoviesAPI.post(url, {form_data: form_value});

        dispatch({ type: 'SUBMIT_FORM', payload: response });
    };
};