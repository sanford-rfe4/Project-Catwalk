import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

import Overview from './Overview';
import Questions from './Questions';
import Ratings from './Ratings';
import RelatedItems from './RelatedItems';
import Search from './reusable/Search';

//let getOverview = GET.overview.getOverview;

const App = (props: any) => {

  // useEffect(() => {
  //   getOverview();
  // }, [])
  const search = (e: any) => {
    e.preventDefault();
    console.log('hiya')
  }
  return (
    <div>
      <Overview/>
      <Questions/>
      <Ratings/>
      <RelatedItems/>
      <Search submitSearch={search} />
    </div>
  );
};

export default App;