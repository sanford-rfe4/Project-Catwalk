import React, { useState, useEffect } from 'react';
import '../../styles/stars.css';

interface stars {
  ratingNum: number;
}

const Stars = (props: stars) => {
  let [stars, setStars] = useState<string[]>([]);

  let rating: number = props.ratingNum;

  let goldStar: string = 'client/assets/images/stars/filled-star.svg';
  let outlineStar: string = 'client/assets/images/stars/unfilled-star.svg';
  let halfStar: string = 'client/assets/images/stars/half-filled.svg';
  let quarterStar: string = 'client/assets/images/stars/quarter-filled.svg';
  let mostlyFilled: string = 'client/assets/images/stars/mostly-filled.svg';
  let starArr: string[] = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      starArr.push(goldStar);
      rating -= 1;
    } else if (rating > 0 && rating < 1) {
      if (rating > 0 && rating < 0.4) {
        starArr.push(quarterStar);
      } else if (rating >= 0.4 && rating <= 0.6) {
        starArr.push(halfStar);
      } else {
        starArr.push(mostlyFilled);
      }
      rating -= 1;
    } else {
      starArr.push(outlineStar);
    }
  }

  useEffect(() => {
    setStars(starArr);
  }, []);

  return (
    <div className='stars'>
      {stars.map((star) => {
<<<<<<< HEAD
        return <img className='star' src={star}></img>;
=======
        return <img className="star" src={star}></img>;
>>>>>>> stars component now completed
      })}
    </div>
  );
};

export default Stars;
