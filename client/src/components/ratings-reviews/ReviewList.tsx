import React, {useState, useEffect} from 'react';
import MoreAdd from '../reusable/MoreAdd';
import HelpfulOrReport from '../reusable/HelpfulOrReport';
import POST from '../../../../api/POST';
import GET from '../../../../api/GET';
import Stars from '../reusable/Stars';
import Dropdown from '../reusable/Dropdown';
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
  const [ReviewsAmount, setReviewsAmount] = useState(0);
  const [sort, setSort] = useState('relevant');

  useEffect(() => {
    fetchReviews();
  }, [])

  const handleClick = () => {
    fetchReviews();
  }
  const itemClick = () => {
    console.log('hello');
  }

  const fetchReviews = async () => {
    var fetchedReviews = await GET.reviews.getSortedProductReviews(20000);
    let mapped = fetchedReviews.results.map((review: any) => (
    <React.Fragment>
    <Stars ratingNum={review.rating}/>
    <div> Reviewer: {review.reviewer_name} Date Posted: {moment(review.date).format('MMMM Do YYYY')} </div>
    <div style={{fontWeight: "bold"}}> {review.summary} </div>
    <div>{review.body}</div>
    <HelpfulOrReport
    widget ='Review'
    index={review.review_id}
    value={review.helpfulness}
    handleClick={handleClick}
    />
    </React.Fragment>
    ));
    setReviewsAmount(mapped.length);
    setReviews(mapped);
  }
  return (
    <React.Fragment>
    <div className='Dropdown'>{ReviewsAmount} reviews, sorted by 
    <Dropdown
    initial={sort}
    listItems={['relevant', 'newest', 'helpful']}
    itemClick={itemClick}/>
    </div>
    {Reviews}
      <span><MoreAdd widget='Review'/></span>
    </React.Fragment>
  )
};

export default ReviewList;