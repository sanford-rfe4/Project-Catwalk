import React, { useEffect } from 'react';
import '../styles.css';

import Overview from './Overview';
import Questions from './Questions';
import Ratings from './Ratings';
import RelatedItems from './RelatedItems';

const App = (props: any) => {

  // this useEffect hook is the same as componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
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