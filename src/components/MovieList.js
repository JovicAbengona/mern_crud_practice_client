import React from 'react';

const MovieList = (props) => {
    const movies   = props.movies;
    let movie_list = [];

    for(let index=0; index < movies.length; index++){
        movie_list.push(
            <option key={movies[index].id} value={movies[index].id}>{movies[index].name} ({movies[index].release_year})</option>
        );
    }

    return movie_list;
    
};

export default MovieList;