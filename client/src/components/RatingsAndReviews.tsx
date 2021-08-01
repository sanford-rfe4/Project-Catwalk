import React, {useState, useEffect} from 'react';
import POST from '../../../api/POST';
import ReviewList from './ratings-reviews/ReviewList';
import Ratings from './ratings-reviews/Ratings';

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

  return (
    <div>
    <div><Ratings filterClick={filterClick}/></div>
    <div><ReviewList filter={filter}/></div>
    </div>
  );
};

export default RatingsAndReviews;