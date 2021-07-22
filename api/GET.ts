import axios from 'axios';
import AJAX from '../client/src/config';

const GET = {
  overview: {
    getOverview: function ajax() {
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
  reviews: {

  },
  questions: {

  },
  relatedItems: {

  }
}

export default GET;

