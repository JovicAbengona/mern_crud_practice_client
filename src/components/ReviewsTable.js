import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewList from './ReviewList';
class ReviewsTable extends Component {
    render() {
        return <div className='table-responsive'>
            <table className="table table-hover">
                <thead className='table-success'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Movie</th>
                        <th scope="col">Name</th>
                        <th scope="col">Review</th>
                        <th scope="col">Date</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <ReviewList />
                </tbody>
            </table>
        </div>
    }
}

export default connect()(ReviewsTable);