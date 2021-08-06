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
    useEffect(() => {
      renderClear();
    }, [filter])

  const clearFilter = () => {
    var arr : any = [];
    setFilter(new Array(0));
    console.log(filter);
  }

  const renderClear = () => {
    if (filter.length > 0) {
      return (<button onClick={() => {clearFilter()}}>Clear filters</button>)
    } else {
      console.log(filter);
    }
  }
  const filterClick = (rating : number) => {
    if (!filter.includes(rating)) {
      console.log('filter', filter);
      var newFilter = filter;
      newFilter.push(rating);
      console.log('newFilter', newFilter);
      setFilter([...newFilter]);
      console.log('newnewfilter', filter);
    }
  };

  return (

      <div className='ratings-reviews'>
      <h2>Ratings &#38; Reviews</h2>
      <div className ='container'>
        <div className='ratings'>
          <Ratings
            productID={props.productID}
            filterClick={filterClick}/>
        </div>
        <div className='review-list'>
          <ReviewList
            productID={props.productID}
            filter={filter}/>
        </div>
      </div>
      {renderClear()}
    </div>
  );
};

export default RatingsAndReviews;