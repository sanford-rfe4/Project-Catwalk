import axios from 'axios';
import AJAX from '../client/src/config';

const GET = {
  overview: {
    // Gets all products
    getOverview: function() {
      axios.get(AJAX.URL + 'products', {
        headers: {
          'Authorization': `${AJAX.API_KEY}`
        }
      })
        .then((response) => {
          console.log(response.data);
        })
    }
  },
  reviews: {

  },
  questions: {

  },
  relatedItems: {

  }
}

export default GET;

