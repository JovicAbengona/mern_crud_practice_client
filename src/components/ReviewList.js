import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchMovieReviews } from '../actions';

class ReviewList extends Component {
    componentDidMount() {
        this.props.fetchMovieReviews();
    }

    render() {
        let reviews_list = [];

        if(this.props.movie_reviews && this.props.movie_reviews.length > 0) {
            const reviews    = this.props.movie_reviews;
            
            for(let index=0; index < reviews.length; index++){
                reviews_list.push(
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{reviews[index].movie_name}</td>
                        <td>{reviews[index].full_name}</td>
                        <td>{reviews[index].review}</td>
                        <td>{moment(reviews[index].created_at).format('MMM. D YYYY')}</td>
                        <td className='fw-bold'>{reviews[index].rating} <i className='fas fa-star text-warning'></i></td>
                    </tr>
                );
            }
            
        }
        else{
            reviews_list.push(
                <tr key="no_reviews">
                    <td colSpan={6} className="text-center fw-bold text-muted">No Reviews</td>
                </tr>
            );
        }

        return reviews_list;
    }
};

const mapStateToProps = (state) => {
    return { 
        movie_reviews: state.movie_reviews_reducer.reviews
    };
};

export default connect(mapStateToProps, {fetchMovieReviews})(ReviewList);