import axios from 'axios';
import AJAX from '../client/src/config';

const headers = {
  'Authorization': `${AJAX.API_KEY}`
}
const POST = {

  postReview: function (body: object) {
    axios.post(AJAX.URL + '/reviews', body, {headers})
    .then((res) => {
      console.log("Successful Review Post!");
    })
    .catch((err) => {
      console.log('Error:', err);
      throw err;
    })
  },
  postQuestion: function(body: object) {
    axios.post(AJAX.URL + '/qa/questions', body, {headers})
    .then((res) => {
      console.log("Successful Question Post!");
    })
    .catch((err) => {
      console.log('Error:', err);
      throw err;
    })
  },
  postAnswer: function(id: Number, body: object) {
    axios.post(AJAX.URL + '/qa/questions/' + id + '/answers', body, {headers})
    .then((res) => {
      console.log("Successful Answer Post!");
    })
    .catch((err) => {
      console.log('Error:', err);
      throw err;
    })

  },
  addToCart: function(body: object) {
    axios.post(AJAX.URL + '/cart', body, {headers})
    .then((res) => {
      console.log("Successful Add to Cart!");
    })
    .catch((err) => {
      console.log('Error:', err);
      throw err;
    })

  },
  postInteraction: function(body: object) {
    axios.post(AJAX.URL + '/interactions', body, {headers})
    .then((res) => {
      console.log("Successful Interaction Post!");
    })
    .catch((err) => {
      console.log('Error:', err);
      throw err;
    })

  }

}

export default POST;