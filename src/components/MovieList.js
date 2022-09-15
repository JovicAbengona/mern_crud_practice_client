import React from 'react';

const MovieList = (props) => {
    const movies   = props.movies;
    let movie_list = [];

    for(let index=0; index < movies.length; index++){
        if(props.type === 'rate_movie'){
            movie_list.push(
                <option key={movies[index].id} value={movies[index].id}>{movies[index].name} ({movies[index].release_year})</option>
            );
        }
        else{
            movie_list.push(
                <tr key={movies[index].id}>
                    <td>{index + 1}</td>
                    <td>{movies[index].name}</td>
                    <td>{movies[index].release_year}</td>
                </tr>
            );
        }
    }

    return movie_list;
    
};

export default MovieList;