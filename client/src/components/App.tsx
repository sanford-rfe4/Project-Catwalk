import React, { useEffect, useState } from 'react';
import GET from '../../../api/GET';
import '../styles/styles.css';
import '../styles/questions.css';
import '../styles/questionModal.css';
import Overview from './Overview';
import Questions from './Questions';
import RatingsAndReviews from './RatingsAndReviews';
import RelatedItems from './RelatedItems';
import Modal from './questions-answers/Modal';
const App = (props: any) => {

  let [currentProduct, setCurrentProduct] = useState({});

  const defaultProduct = async () => {
    let product = await GET.products.getProductById(19089);
    setCurrentProduct(product);
  }

  // this useEffect hook is the same as componentDidMount.
  useEffect(() => {
    defaultProduct();
  }, [])

  return (
    <div>
<<<<<<< HEAD
      <Overview
        selectedProduct={currentProduct}
        setProduct={setCurrentProduct}
      />
      <Questions/>
      <RatingsAndReviews/>
=======
      <Overview selectedProduct={currentProduct}/>
      <Questions />
      <Ratings/>
>>>>>>> 0629673 (basic functionality of q and a implemented)
      <RelatedItems/>
    </div>
  );
};

export default App;