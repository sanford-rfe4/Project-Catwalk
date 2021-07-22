import axios from 'axios';
import AJAX from '../client/src/config';

const header = {
  'Authorization': `${AJAX.API_KEY}`
}

const GET = {
  products: {
    // Gets all products. Specifcy the count and which page.
    getProducts: function(page = 1, count = 5) {
      axios.get(AJAX.URL + '/products', {
        params: {
          page: page,
          count: count
        },
        headers: header
      })
        .then((response) => {
          console.log(response.data);
        })
    },

    // Gets a single product by its id
    getProductById: function(id: Number) {
      axios.get(AJAX.URL + '/products/' + id, {
        headers: header
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
          console.log('Item not found.');
        })
    },

    // Gets all of the styles of a specific product
    getProductStylesById: function(id: Number) {
      axios.get(AJAX.URL + '/products/' + id + '/styles', {
        headers: header
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
          console.log('Item not found.');
        })
    },

    // Gets the ids of all the products related to the specified product
    getRelatedProductsById: function(id: Number) {
      axios.get(AJAX.URL + '/products/' + id + '/related', {
        headers: header
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
          console.log('Item not found.');
        })
    },
  },
  reviews: {

  },
  questions: {

  },
  cart: {

  },
  interactions: {

  }
}

export default GET;

