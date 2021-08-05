import React, { useEffect, useState } from 'react';
import '../../styles/product-info.css';
import GET from '../../../../api/GET';

import Stars from '../reusable/Stars';
import StyleSelector from './StyleSelector';
import Cart from './Cart';
import SocialMedia from './SocialMedia';

const ProductInfo = (props: any) => {

  let {product, selectedStyle, styleId, setStyle, setStyleId, setStylePhotos} = props;

  let [currentStyle, setCurrentStyle] = useState<any>({});
  let [productRating, setProductRating] = useState<number>(0);
  let [productPrice, setProductPrice] = useState('');
  let [productDiscountPrice, setProductDiscountPrice] = useState(null);
  let [ratings, setRatings] = useState<object[]>([]);
  let [ratingExists, setRatingExists] = useState<boolean>(false);
  let [styles, setStyles] = useState([]);

  const findReviews = async () => {
    let response = await GET.reviews.getSortedProductReviews(props.product.id);
    setRatings(response.results);
  }

  const findProductStyles = async () => {
    let styles = await GET.products.getProductStylesById(product.id);
    setStyles(styles.results);
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

  const renderStars = () => {
    if (ratingExists) {
      return <Stars ratingNum={productRating} />
    } else {
      return <Stars ratingNum={0} />
    }
  }

  useEffect(() => {
    if (product.id) {
      findReviews();
      findProductStyles();
      setProductPrice(product.default_price);
    }
  }, [product]);

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
      <div id='product-star-rating-div'>
        <span id='product-star-rating'>{renderStars()}</span><span><a id='read-reviews' href="#rating-header">Read all reviews</a></span>
      </div>
      <div id='product-category'>
        {product.category !== undefined ? product.category.toUpperCase() : ''}
      </div>
      <div id='product-title'>
        {product.name}
      </div>
      <div id='product-price'>
        {productDiscountPrice !== null ?
        <div>
          <span className='slashed-price'>${productPrice}</span>
          <span> ${productDiscountPrice}</span>
        </div> :
        '$' + productPrice}
      </div>
      <SocialMedia/>
      <div id='product-styles-div'>
        <StyleSelector
          styles={styles}
          setStylePhotos={setStylePhotos}
          setStyle={setStyle}
          setStyleId={setStyleId}
          selectedStyle={selectedStyle}
          setStylePrice={setProductPrice}
          setStyleDiscountPrice={setProductDiscountPrice}
        />
      </div>
      <Cart
        styleId={styleId}
        styles={styles}
        selectedStyle={selectedStyle}
        setCurrentStyle={setCurrentStyle}
      />
    </div>
  );
};

export default ProductInfo;
