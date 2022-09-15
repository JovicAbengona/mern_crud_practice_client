import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, populateForm, submitForm, fetchMovieReviews } from '../actions';
import MovieList from './MovieList'
import ReviewsTable from '../components/ReviewsTable';

class RateMovieForm extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    onFormChange = async (e) => {
        await this.props.populateForm(this.props.form_value, e.target.name, e.target.value);
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        
        await this.props.submitForm('rate_movie', this.props.form_value);

        if(this.props.submit_form_result){
            e.target.reset();
            await this.props.fetchMovieReviews();
        }
    }

    render() {
        if(this.props.movies){
            return <>
                <form className="row g-3 mt-2" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                    <h4>Rate A Movie</h4>
                    <div className="col-md-12 col-xs-12">
                        <label htmlFor="movie_id" className="form-label">Movie</label>
                        <select id="movie_id" name="movie_id" className="form-select" defaultValue={'0'} required>
                            <option value='0' disabled>Choose A Movie</option>
                            <MovieList movies={this.props.movies} type='rate_movie' />
                        </select>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Enter your First Name" required />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <label htmlFor="last_name" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Enter your Last Name" required />
                    </div>
                    <div className="col-md-12 col-xs-12">
                        <label htmlFor="email_address" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email_address" name="email_address" placeholder="Enter your Email Address" required />
                    </div>
                    <div className="col-md-2 col-xs-12">
                        <label htmlFor="rating" className="form-label">Rating (1-5)</label>
                        <input type="number" className="form-control" id="rating" name="rating" min="1" max="5" required />
                    </div>
                    <div className="col-md-10 col-xs-12">
                        <label htmlFor="review" className="form-label">Review</label>
                        <textarea className="form-control" placeholder="Type your review here" id="review" name="review" required></textarea>
                    </div>
                    <div className="col-md-12 col-xs-12">
                        <button type="submit" className="btn btn-success">Submit Rating</button>
                    </div>
                </form>
                <hr />
                <ReviewsTable />
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