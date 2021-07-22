import React, { useEffect } from 'react';
import GET from '../../../api/GET';
// import axios from 'axios';
// import AJAX from '../config';

import Overview from './Overview';
import Questions from './Questions';
import Ratings from './Ratings';
import RelatedItems from './RelatedItems';

let getOverview = GET.overview.getOverview;

// AJAX Example
// function ajax() {
//   axios.get(AJAX.URL, {
//     headers: {
//       'Authorization': `token ${AJAX.API_KEY}`
//     }
//   })
// }

const App = (props: any) => {

  useEffect(() => {
    getOverview();
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