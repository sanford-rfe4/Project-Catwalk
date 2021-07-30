import React, {useState, useEffect} from 'react';
import MoreAdd from '../reusable/MoreAdd';
import HelpfulOrReport from '../reusable/HelpfulOrReport';
import POST from '../../../../api/POST';
import GET from '../../../../api/GET';
import Stars from '../reusable/Stars';
import Dropdown from '../reusable/Dropdown';
import '../../styles/reviews.css';
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
  const [currentReviews, setCurrentReviews] = useState(2);
  const [noMoreReviews, setNoMoreReviews] = useState(false);
  //console.log(Reviews);
  //console.log(currentReviews);
  useEffect(() => {
    fetchReviews(sort);
  }, [sort])

  const handleClick = () => {
    fetchReviews(sort);
  }
  const itemClick = (event: any) => {
    setSort(event.target.innerText);
  }
  const checkRecommend = (recommend: boolean) => {
    if (recommend === true) {
      return (
        <div className='recommend'>&#10003; I recommend this product</div>
      )
    }
  }
  const reviewPrint = () => {
    var reviews : any = [];
    if (ReviewsAmount < 2 && !noMoreReviews) {
      setNoMoreReviews(true);
    }

    for (var i = 0; i < currentReviews; i++) {
      reviews.push(Reviews[i]);
    }
    return reviews;
  }
  const moreClick = () => {
    setCurrentReviews(currentReviews + 2);
    if (ReviewsAmount <= currentReviews + 2) {
      setNoMoreReviews(true);
    }
  };

  const fetchReviews = async (sort: string) => {
    var fetchedReviews = await GET.reviews.getSortedProductReviews(20000, 1, 5, sort);
    let mapped = fetchedReviews.results.map((review: any) => (
    <div className='review'>
      <div className='header'>
        <Stars ratingNum={review.rating}/>
        {review.reviewer_name}, {moment(review.date).format('MMMM Do YYYY')}
      </div>
      <div style={{fontWeight: "bold"}}> {review.summary} </div>
      <div className='reviewBody'>{review.body}</div>
      {checkRecommend(review.recommend)}
      <HelpfulOrReport
      widget ='Review'
      index={review.review_id}
      value={review.helpfulness}
      handleClick={handleClick}
      />
    </div>
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
    {reviewPrint()}
      <span><MoreAdd widget='Review' moreClick={moreClick} noMoreItems = {noMoreReviews}/></span>
    </React.Fragment>
  )
};

export default ReviewList;