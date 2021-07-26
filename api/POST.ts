import axios from 'axios';
import AJAX from '../client/src/config';

const headers = {
  'Authorization': `${AJAX.API_KEY}`
}

interface Review {
  product_id: String,
  rating: Number,
  summary: String,
  body: String,
  recommend: Boolean,
  name: String,
  email: String,
  photos: String[]
  characteristics: Object
}

interface Question {
  body: String,
  name: String,
  email: String,
  product_id: Number
}

interface Answer {
  body: String,
  name: String,
  email: String,
  photos: String[]
}

interface Cart {
  sku_id: Number
}

interface Interaction {
  element: String,
  widget: String,
  time: String
}

const POST = {

  postReview: function (body: Review) {
    axios.post(AJAX.URL + '/reviews', body, {headers})
    .then((res) => {
      console.log("Successful Review Post!");
    })
    .catch((err) => {
      console.log('Error:', err);
      throw err;
    })
  },
  postQuestion: function(body: Question) {
    axios.post(AJAX.URL + '/qa/questions', body, {headers})
    .then((res) => {
      console.log("Successful Question Post!");
    })
    .catch((err) => {
      console.log('Error:', err);
      throw err;
    })
  },
  postAnswer: function(question_id: Number, body: Answer) {
    axios.post(AJAX.URL + '/qa/questions/' + question_id + '/answers', body, {headers})
    .then((res) => {
      console.log("Successful Answer Post!");
    })
    .catch((err) => {
      console.log('Error:', err);
      throw err;
    })

  },
  addToCart: function(body: Cart) {
    axios.post(AJAX.URL + '/cart', body, {headers})
    .then((res) => {
      console.log("Successful Add to Cart!");
    })
    .catch((err) => {
      console.log('Error:', err);
      throw err;
    })

  },
  postInteraction: function(body: Interaction) {
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