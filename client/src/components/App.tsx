import React, { useEffect } from 'react';
import '../styles/styles.css';

import Overview from './Overview';
import Questions from './Questions';
import Ratings from './Ratings';
import RelatedItems from './RelatedItems';

<<<<<<< HEAD
//let getOverview = GET.overview.getOverview;

const App = (props: any) => {

  // useEffect(() => {
  //   getOverview();
  // }, [])
=======
const App = (props: any) => {

  // this useEffect hook is the same as componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
  }, [])
>>>>>>> de2c3308e92ba3e75114c47acc1cf3abf6fdc6b1

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