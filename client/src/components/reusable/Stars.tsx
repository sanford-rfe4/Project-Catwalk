import React, { useState, useEffect } from 'react';
import '../../styles/stars.css'

interface stars {
  ratingNum: number
}

const Stars = (props: stars) => {

  let [stars, setStars] = useState<string[]>([])

  let rating: number = props.ratingNum;
  let goldStar: string = "client/assets/images/stars/star.png";
  let outlineStar: string = "client/assets/images/stars/star-outline.png";
  let starArr: string[] = [];

  for (let i = 0; i < 5; i++) {
    if (rating - 1 >= 0) {
      starArr.push(goldStar);
      rating -= 1;
    } else {
      starArr.push(outlineStar);
    }
  }

  useEffect(() => {
    setStars(starArr);
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => {
        return <img className="star" src={star}></img>
      })}
    </div>
  );
};

export default Stars;