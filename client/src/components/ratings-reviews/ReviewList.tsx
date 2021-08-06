import React, {useState, useEffect} from 'react';
import POST from '../../../../api/POST';
import GET from '../../../../api/GET';
import MoreAdd from '../reusable/MoreAdd';
import HelpfulOrReport from '../reusable/HelpfulOrReport';
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
  const [Ratings, setRatings] = useState([]);

  useEffect(() => {
    fetchReviews(sort);
  }, [sort, props.productID])

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
    if (currentReviews < 2 && !noMoreReviews) {
      setNoMoreReviews(true);
    }
    var i = 0;
    console.log('inside reviewlist filter: ', props.filter);
    while (reviews.length !== currentReviews) {
      if (props.filter.includes(Ratings[i]) || props.filter.length === 0) {
        reviews.push(Reviews[i]);
      }
      i++;
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
    var fetchedReviews = await GET.reviews.getSortedProductReviews(props.productID, 1, 500, sort);
    let ratingsArray = fetchedReviews.results.map((review: any) => (review.rating));
    let mapped = fetchedReviews.results.map((review: any) => (
    <div className='review'>
      <div className='header'>
        <Stars ratingNum={review.rating}/>
        <div className='info'>{review.reviewer_name}, {moment(review.date).format('MMMM Do YYYY')}</div>
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
    if (mapped.length < 2) {
      setCurrentReviews(mapped.length);
    }
    setRatings(ratingsArray);
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
    <div className='scrollable'>{reviewPrint()}</div>
      <span>
        <MoreAdd
          widget='Review'
          moreClick={moreClick}
          noMoreItems = {noMoreReviews}
          productID = {props.productID}/>
      </span>
    </React.Fragment>
  )
};

export default ReviewList;