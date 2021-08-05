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
    var calculations : any = {};

    for (var value in ratings) {
      totalRating += parseInt(value) * parseInt(ratings[value]);
      totalReviews += parseInt(ratings[value]);
    }

    for (var value in ratings) {
      var percent = parseInt(ratings[value]) / totalReviews
      Math.round(percent * 10) / 10;
      if (percent !== undefined) {
        calculations[value] = percent;
      }
    }
    console.log(calculations);
    averageRating = totalRating/totalReviews;
    calculations[0] = Math.round(averageRating * 10) /10;
    return calculations;
  }
  const ratingsCheck = (rating : any) => {
    if (rating === undefined) {
      return 0;
    } else {
      return rating;
    }
  }
  const fetchMetaData = async () => {
    var fetchedData = await GET.reviews.getProductReviewMetaDataById(props.productID);
    var recommend = fetchedData.recommended;
    const calculations : Array<number> = ratingCalc(fetchedData.ratings);
    setRating(calculations[0]);

    var mapped = [];
    var stars = [0, 1, 2, 3, 4, 5];
    for (var i = 5; i >= 1; i--) {
      mapped.push(
        <StarBar
          percent={calculations[i]}
          filterClick={props.filterClick}
          ratingsCheck={ratingsCheck}
          reviews={fetchedData.ratings[i]}
          rating={i}
          />
      );
    }

    console.log(recommend.false);
    var recTrue = parseInt(recommend.true);
    var recFalse = parseInt(recommend.false);
    console.log(recFalse, recTrue);
    if (!recTrue && !recFalse) {
      setRecommendPercent(0);
    } else if (!recFalse) {
      setRecommendPercent(100);
    } else if (!recTrue) {
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
      <div className='total-breakdown'>
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