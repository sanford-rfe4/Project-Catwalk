import React, { useEffect, useState } from 'react';
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
      <Overview/>
      <Questions productId={19090}/>
      <Ratings/>
      <RelatedItems/>
    </div>
  );
};

export default App;