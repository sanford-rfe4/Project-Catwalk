import React, { useEffect, useState } from 'react';
import GET from '../../../api/GET';
import '../styles/styles.css';
import Overview from './Overview';
import Questions from './Questions';
import RatingsAndReviews from './RatingsAndReviews';
import RelatedItems from './RelatedItems';
import Modal from './questions-answers/Modal';
const App = (props: any) => {
  let [currentProduct, setCurrentProduct] = useState<any>({});
  let [productId, setProductId] = useState();

  const defaultProduct = async () => {
    let product = await GET.products.getProductById(19089);
    setCurrentProduct(product);
  }

  // this useEffect hook is the same as componentDidMount.
  useEffect(() => {
    defaultProduct();
  }, [])

  useEffect (() => {
    if (currentProduct.id) {
      setProductId(currentProduct.id);
    }
  }, [currentProduct])

  return (
    <div>
      <Overview
      selectedProduct={currentProduct}
      setProduct={setCurrentProduct}
      />
      <Questions/>
      <RatingsAndReviews productID={productId}/>
      <RelatedItems/>
    </div>
  );
};

export default App;