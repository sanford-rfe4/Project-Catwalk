import React, {useState, useEffect} from 'react';
import MoreAdd from '../reusable/MoreAdd';
import HelpfulOrReport from '../reusable/HelpfulOrReport';
import POST from '../../../../api/POST';
import GET from '../../../../api/GET';
const moment = require('moment');

// let postQuestion = POST.postQuestion;
// var data = {
//         'body': 'Will this second question post on product 19000?',
//         'name': 'Christian Gazmuri',
//         'email': 'christiangazmo@gmail.com',
//         'product_id': 19000
// }
const ReviewList = (props: any) => {
  const [Reviews, setReviews] = useState([]);
  const [click, setClick] = useState(false);
  useEffect(() => {
    fetchReviews();
  }, [])

  useEffect(() => {
    fetchReviews();
  }, [click])

  const fetchReviews = async () => {
    var fetchedReviews = await GET.reviews.getSortedProductReviews(20000);
    console.log(fetchedReviews.results);
    let mapped = fetchedReviews.results.map((review: any) => (
    <React.Fragment>
    <div>Stars: {review.rating} Reviewer: {review.reviewer_name} Created At: {moment(review.date).format('MMMM Do YYYY')}</div>
    <div>{review.summary}</div>
    <div>{review.body}</div>
    <HelpfulOrReport index={review.review_id} value={review.helpfulness} fetch={setClick}/>
    </React.Fragment>
    ));
    setReviews(mapped);
  }
  return (
    <React.Fragment>
    {Reviews}
      <span><MoreAdd widget='Review'/></span>
    </React.Fragment>
  )
};

export default ReviewList;