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
    getReview: function() {
      axios.get(AJAX.URL + 'reviews', {
        headers: {
          'Authorization': `${AJAX.API_KEY}`
        }
      })
        .then((response) => {
          console.log(response.data);
        })
    }
  },
  questions: {

  },
  relatedItems: {

  }
}

export default GET;

