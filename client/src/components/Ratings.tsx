import React, {useEffect} from 'react';
import POST from '../../../api/POST';
import ReviewList from './ratings-reviews/ReviewList';

// let postQuestion = POST.postQuestion;
// var data = {
//         'body': 'Will this second question post on product 19000?',
//         'name': 'Christian Gazmuri',
//         'email': 'christiangazmo@gmail.com',
//         'product_id': 19000
// }
const Ratings = (props: any) => {

  // useEffect(() => {
  //   postQuestion(data);
  // }, [])

  return (
    <div><ReviewList/></div>
  );
};

export default Ratings;