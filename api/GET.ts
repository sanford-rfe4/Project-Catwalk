import axios from 'axios';
import AJAX from '../client/src/config';

const header = {
  'Authorization': `${AJAX.API_KEY}`
}

const GET = {
  products: {
    // Gets all products. Specifcy the count and which page.
    getProducts: async function(page: Number = 1, count: Number = 5) {
      try {
        let results = await axios.get(AJAX.URL + '/products', {
          params: {
            page: page,
            count: count
          },
          headers: header
        });
        // console.log(results.data);
        return results.data;
      } catch(err) {
        console.log('Items not found.');
        throw err;
      }
    },

    // Gets a single product by its id
    getProductById: async function(id: Number) {
      try {
        let result = await axios.get(AJAX.URL + '/products/' + id, {
          headers: header
        });
        // console.log(result.data);
        return result.data;
      } catch(err) {
        console.log('Item not found.');
        throw err;
      }
    },

    // Gets all of the styles of a specific product
    getProductStylesById: async function(id: Number) {
      try {
        let result = await axios.get(AJAX.URL + '/products/' + id + '/styles', {
          headers: header
        });
        // console.log(result.data);
        return result.data;
      } catch(err) {
        console.log('Item not found.');
        throw err;
      }
    },

    // Gets the ids of all the products related to the specified product
    getRelatedProductsById: async function(id: Number) {
      try {
        let result = await axios.get(AJAX.URL + '/products/' + id + '/related', {
          headers: header
        });
        // console.log(result.data);
        return result.data;
      } catch(err) {
        console.log('Item not found.');
        throw err;
      }
    },
  },
  reviews: {
    // gets reviews for a specific product. can sort by "newest", "helpful", or "relevant".
    getSortedProductReviews: async function(id: Number, page: Number = 1, count: Number = 5, sort: String = 'newest') {
      try {
        let result = await axios.get(AJAX.URL + '/reviews', {
          params: {
            page: page,
            count: count,
            sort: sort,
            product_id: id
          },
          headers: header
        });
        // console.log(result.data);
        return result.data;
      } catch(err) {
        console.log('reviews not found');
        throw err;
      }
    },

    // Gets the meta data for the reviews of a specific product.
    getProductReviewMetaDataById: async function(id: Number) {
      try {
        let result = await axios.get(AJAX.URL + '/reviews/meta', {
          params: {
            product_id: id
          },
          headers: header
        });
        // console.log(result.data);
        return result.data;
      } catch(err) {
        console.log("Couldn't retrieve meta data.");
        throw err;
      }
    }
  },
  questions: {
    // Gets the questions for a specific product.
    getProductQuestionsById: async function(id: Number, page: Number = 1, count: Number = 5) {
      try {
        let result = await axios.get(AJAX.URL + '/qa/questions', {
          params: {
            product_id: id,
            page: page,
            count: count
          },
          headers: header
        });
        // console.log(result.data);
        return result.data;
      } catch(err) {
        console.log('Could not retrieve product questions.');
        throw err;
      }
    },

    // Gets the answers for a specific question.
    getAnswersForQuestionsByQuestionId: async function(question_id: Number, page: Number = 1, count: Number = 5) {
      try {
        let result = await axios.get(AJAX.URL + '/qa/questions/' + question_id + '/answers', {
          params: {
            page: page,
            count: count
          },
          headers: header
        });
        // console.log(result.data);
        return result.data;
      } catch(err) {
        console.log('Could not find answers for question.');
        throw err;
      }
    }
  },
  cart: {
    // Get all the items from a users cart.
    getCart: async function() {
      try {
        let result = await axios.get(AJAX.URL + '/cart', {
          headers: header
        });
        console.log(result.data);
        return result.data;
      } catch(err) {
        console.log('Could not retrieve cart.')
        throw err;
      }
    }

  }
}

export default GET;

