import React, { useEffect } from 'react';
import '../styles/styles.css';

import Overview from './Overview';
import Questions from './Questions';
import Ratings from './Ratings';
import RelatedItems from './RelatedItems';

//let getOverview = GET.overview.getOverview;

const App = (props: any) => {

  // useEffect(() => {
  //   getOverview();
  // }, [])

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