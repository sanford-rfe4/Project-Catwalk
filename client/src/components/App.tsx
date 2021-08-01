import React, { useEffect, useState } from 'react';
import GET from '../../../api/GET';
import '../styles/styles.css';

import Overview from './Overview';
import Questions from './Questions';
import RatingsAndReviews from './RatingsAndReviews';
import RelatedItems from './RelatedItems';

const App = (props: any) => {

  let [currentProduct, setCurrentProduct] = useState({});

  const defaultProduct = async () => {
    let product = await GET.products.getProductById(19100);
    setCurrentProduct(product);
  }

  // this useEffect hook is the same as componentDidMount
  useEffect(() => {
    defaultProduct();
  }, [])

  return (
    <div>
      <Overview selectedProduct={currentProduct}/>
      <Questions/>
      <RatingsAndReviews/>
      <RelatedItems/>
    </div>
  );
};

export default App;