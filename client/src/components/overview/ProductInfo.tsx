import React, { useEffect, useState } from 'react';
import GET from '../../../../api/GET';

import Stars from '../reusable/Stars';

const ProductInfo = (props: any) => {

  let {productId} = props;

  let [productRating, setProductRating] = useState<number>(0);
  let [ratings, setRatings] = useState<object[]>([]);
  let [ratingExists, setRatingExists] = useState<boolean>(false);

  const findReviews = async () => {
    let product = await props.productId
    let response = await GET.reviews.getSortedProductReviews(product);
    let data = response;
    setRatings(data.results)
  }

  const findRatings = async (ratings: any) => {
      let totalRatings = 0;
      let sumRatings = 0;

      for (let i = 0; i < ratings.length; i++) {
        totalRatings++;
        sumRatings += ratings[i]['rating'];
      }

      setProductRating(sumRatings / totalRatings);
  }

  // console.log(productRating);

  const renderStars = () => {
    if (ratingExists) {
      return <Stars ratingNum={productRating} />
    } else {
      return <Stars ratingNum={0} />
    }
  }

  useEffect(() => {
    if (productId) {
      findReviews();
    }
  }, [productId]);

  useEffect(() => {
    if (ratings.length !== 0) {
      setRatingExists(true);
      findRatings(ratings);
    } else {
      setRatingExists(false);
    }
  }, [ratings])


  return (
    <div id='product-info'>
      <div id='product-star-rating'>
        {renderStars()}
      </div>
      <div id='product-category'>

      </div>
      <div id='product-title'>

      </div>
      <div id='product-price'>

      </div>
    </div>
  );
};

export default ProductInfo;
