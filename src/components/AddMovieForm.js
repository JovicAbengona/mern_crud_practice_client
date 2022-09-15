import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, populateForm, submitForm, fetchMovieReviews } from '../actions';
import MovieList from './MovieList'

class RateMovieForm extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    onFormChange = async (e) => {
        await this.props.populateForm(this.props.form_value, e.target.name, e.target.value);
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        
        await this.props.submitForm('add_movie', this.props.form_value);

        if(this.props.submit_form_result){
            e.target.reset();
            await this.props.fetchMovies();
        }
    }

    render() {
        if(this.props.movies){
            return <>
                <form className="row g-3 mt-2" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                    <h4>Add A Movie</h4>
                    <div className="col-md-8 col-xs-12">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Movie Title" required />
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <input type="number" className="form-control" id="release_year" name="release_year" min="1700" max={(new Date().getFullYear())} placeholder="Enter Release Year"  required />
                    </div>
                    <div className="col-md-12 col-xs-12">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
                <h4 className='mt-3'>Movies</h4>
                <div className='movies_table table-responsive'>
                    <table className="table table-hover">
                        <thead className='table-success'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Movie Title</th>
                                <th scope="col">Release Year</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <MovieList movies={this.props.movies} type='add_movie' />
                        </tbody>
                    </table>
                </div>
            </>
        }
    }
}

const mapStateToProps = (state) => {
    return { 
        movies: state.movies_reducer.movies,
        form_value: state.form_value_reducer.form_value,
        submit_form_result: state.submit_form_reducer.status
    };
};

export default connect(mapStateToProps, {fetchMovies, populateForm, submitForm, fetchMovieReviews})(RateMovieForm);