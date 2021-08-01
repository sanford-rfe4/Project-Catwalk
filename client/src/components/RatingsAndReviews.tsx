import React, {useState, useEffect} from 'react';
import POST from '../../../api/POST';
import ReviewList from './ratings-reviews/ReviewList';
import Ratings from './ratings-reviews/Ratings';
import '../styles/reviewsratings.css';
// let postQuestion = POST.postQuestion;
// var data = {
//         'body': 'Will this second question post on product 19000?',
//         'name': 'Christian Gazmuri',
//         'email': 'christiangazmo@gmail.com',
//         'product_id': 19000
// }
const RatingsAndReviews = (props: any) => {
  const [filter, setFilter] = useState<any>([]);
  // useEffect(() => {
  //   postQuestion(data);
  // }, [])
  const filterClick = (rating : number) => {
    var newFilter = filter;
    newFilter.push(rating);
    setFilter(newFilter);
  };

  return  (
    <div>
    <h2>Ratings &#38; Reviews</h2>
    <div className ='container'>
    <div className='ratings'><Ratings productID={props.productID} filterClick={filterClick}/></div>
    <div className='review-list'><ReviewList productID={props.productID} filter={filter}/></div>
    </div>
    </div>
  );
};

export default RatingsAndReviews;