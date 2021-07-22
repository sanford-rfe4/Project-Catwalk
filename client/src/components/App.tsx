import React, { useEffect } from 'react';
import GET from '../../../api/GET';

import Overview from './Overview';
import Questions from './Questions';
import Ratings from './Ratings';
import RelatedItems from './RelatedItems';

let getProducts = GET.products.getProducts;
let getProductById = GET.products.getProductById;
let getProductStylesById = GET.products.getProductStylesById;
let getRelatedProductsById = GET.products.getRelatedProductsById;
let getSortedProductReviews = GET.reviews.getSortedProductReviews;
let getProductReviewMetaDataById = GET.reviews.getProductReviewMetaDataById;
let getProductQuestionsById = GET.questions.getProductQuestionsById;

const App = (props: any) => {

  useEffect(() => {
    getProductReviewMetaDataById(19100);
    getRelatedProductsById(19100);
    getProductQuestionsById(19100, 1, 20);
  }, [])

  return (
    <div>
      <h1>App</h1>
      <Overview/>
      <Questions/>
      <Ratings/>
      <RelatedItems/>
    </div>
  );
};

export default App;