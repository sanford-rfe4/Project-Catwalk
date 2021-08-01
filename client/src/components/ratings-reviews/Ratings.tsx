import React, {useState, useEffect} from 'react';
import GET from '../../../../api/GET';
import Stars from '../reusable/Stars';
import StarBar from './StarBar';

// const [Reviews, setReviews] = useState([]);
const Ratings = (props: any) => {
  const [Rating, setRating] = useState(0);
  const [Bars, setBars] = useState<any>([]);

  useEffect(() => {
    fetchMetaData();
  }, [])

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
    var fetchedData = await GET.reviews.getProductReviewMetaDataById(19093);
    const calculations : Array<number> = ratingCalc(fetchedData.ratings);
    setRating(calculations[0]);

    var mapped = [];
    for (var i = 1; i < 6; i++) {
      mapped.push(<StarBar
        filterClick={props.filterClick}
        percent={calculations[i]}
        rating={i}
        reviews={fetchedData.ratings[i]}
        />);
    }
    setBars(mapped);
  }


  return (
    <div>
    <div>
      <div>{Rating}</div><Stars ratingNum={Rating}/>
    </div>
    <div>
      {Bars}
    </div>
    </div>
  )
}

export default Ratings;