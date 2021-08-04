import React, {useState, useEffect} from 'react';
import Characteristics from './Characteristics';
import GET from '../../../../api/GET';
import Stars from '../reusable/Stars';
import StarBar from './StarBar';
import '../../styles/ratings.css';


// const [Reviews, setReviews] = useState([]);
const Ratings = (props: any) => {
  const [Rating, setRating] = useState(0);
  const [Bars, setBars] = useState<any>([]);
  const [char, setChar] = useState({});
  const [recommendPercent, setRecommendPercent] = useState(0);
  useEffect(() => {
    if (props.productID) {
      fetchMetaData();
    }
  }, [props.productID])
  // const [id, setId] = useState();
  // useEffect(() => {
  //   if (props.productID) {
  //     setId(props.productID);
  //   }
  // }, [props.productID])

  const ratingCalc = (ratings: any) => {
    var totalRating = 0;
    var totalReviews = 0;
    var averageRating = 0;
    var calculations = [];

    for (var value in ratings) {
      totalRating += parseInt(value) * parseInt(ratings[value]);
      totalReviews += parseInt(ratings[value]);
    }
    for (var value in ratings) {
      var percent = parseInt(ratings[value]) / totalReviews
      Math.round(percent * 10) / 10;
      calculations.push(percent);
    }

    averageRating = totalRating/totalReviews;
    calculations.unshift(averageRating);
    calculations[0] = Math.round(calculations[0] * 10) /10;
    return calculations;
  }
  const fetchMetaData = async () => {
    var fetchedData = await GET.reviews.getProductReviewMetaDataById(props.productID);
    var recommend = fetchedData.recommended;
    const calculations : Array<number> = ratingCalc(fetchedData.ratings);
    setRating(calculations[0]);

    var mapped = [];
    for (var i = 1; i < 6; i++) {
      mapped.push(
      <div className='breakdown'>
        <a className='stars' onClick={() => (props.filterClick(i))}>
        {i} stars
        </a>
        <StarBar
          filterClick={props.filterClick}
          percent={calculations[i]}
          />
        <div className ='review-amount'>
          {fetchedData.ratings[i]} Reviews
        </div>
      </div>
      );

    }
    var recTrue = parseInt(recommend.true);
    var recFalse = parseInt(recommend.false);
    console.log(recTrue, recFalse);
    if (recTrue === 0 && recFalse === 0) {
      setRecommendPercent(0);
    } else if (recFalse === 0) {
      setRecommendPercent(100);
    } else if (recTrue === 0) {
      setRecommendPercent(0);
    } else {
      var total = recTrue + recFalse;
      var percent = Math.round((recTrue / total) * 100);
      setRecommendPercent(percent);
    }
    setChar(fetchedData.characteristics);
    setBars(mapped);
  }

  return (
      <div>
      <div id='rating-header' className='rating-header'>
        <h1 className='rating'>{Rating}</h1><Stars ratingNum={Rating}/>
      </div>
      <div>
        {Bars}
      </div>
      <div className='recommend'>
        {recommendPercent}% of the reviews recommend this product!
      </div>
      <div>
        <Characteristics char={char}/>
      </div>
    </div>
  )
}

export default Ratings;