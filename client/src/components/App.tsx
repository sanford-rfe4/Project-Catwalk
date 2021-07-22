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

const App = (props: any) => {

  useEffect(() => {
    getRelatedProductsById(19100);
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