import React, { useEffect } from 'react';
import axios from 'axios';
import AJAX from '../config';
import PUT from '../../../api/PUT';

import Overview from './Overview';
import Questions from './Questions';
import Ratings from './Ratings';
import RelatedItems from './RelatedItems';

// AJAX Example
// function ajax() {
//   axios.get(AJAX.URL, {
//     headers: {
//       'Authorization': `token ${AJAX.API_KEY}`
//     }
//   })
// }

const App = (props: any) => {
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