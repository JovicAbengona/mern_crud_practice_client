import React from 'react';

const ReviewList = (props) => {
    const reviews    = props.reviews;
    let reviews_list = [];

    for(let index=0; index < reviews.length; index++){
        reviews_list.push(
            <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{reviews[index].movie_name}</td>
                <td>{reviews[index].full_name}</td>
                <td>{reviews[index].review}</td>
                <td className='fw-bold'>{reviews[index].rating} <i className='fas fa-star text-warning'></i></td>
            </tr>
        );
    }

    return reviews_list;
};

export default ReviewList;