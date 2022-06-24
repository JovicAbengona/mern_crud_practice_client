import React from 'react';
import ReviewList from './ReviewList';

const ReviewsTable = (props) => {
    if(props.reviews){
        return <div className='table-responsive'>
            <table className="table table-hover">
                <thead className='table-success'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Movie</th>
                        <th scope="col">Name</th>
                        <th scope="col">Review</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <ReviewList reviews={props.reviews} />
                </tbody>
            </table>
        </div>
    }
};

export default ReviewsTable;