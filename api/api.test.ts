// DOCS: https://jestjs.io/docs/expect
import GET from './GET';
import POST from './POST';

describe('GET methods', () => {

  describe('Products', () => {
    it('returns an array of five objects when getProducts is invoked', async () => {
      const data = await GET.products.getProducts(1, 5);
      expect(data.length).toBe(5);
      for (let i = 0; i < data.length; i++) {
        expect(typeof data[i]).toBe('object');
        expect(data[i].campus).toBe('hr-rfp');
      }
    });

    it('returns a single product object when getProductById is invoked', async () => {
      const data = await GET.products.getProductById(17067);
      expect(typeof data).toBe('object');
      // expect(typeof data.id).toBe('number');
      expect((data.campus)).toBe('hr-rfe');
    });

    it('returns an object containing the product_id and a results array when getProductStylesById is invoked', async () => {
      const data = await GET.products.getProductStylesById(19100);
      expect(typeof data).toBe('object');
      expect(Array.isArray(data.results)).toBe(true);
      expect(data.product_id).toBe('19100');
    });

    it('returns an array of related product ids when getRelatedProductsById is invoked', async () => {
      const data = await GET.products.getRelatedProductsById(19100);
      expect(Array.isArray(data)).toBe(true);
      for (let i = 0; i < data.length; i++) {
        expect(typeof data[i]).toBe('number');
      }
    });
  });

  describe('Reviews', () => {
    it('returns an object with a results array when getSortedProductReviews is invoked', async () => {
      const data = await GET.reviews.getSortedProductReviews(19100, 1, 15);
      expect(typeof data).toBe('object');
      expect(Array.isArray(data.results)).toBe(true);
      expect(data.product).toBe('19100');
    });

    it('returns an object with meta data when getProductReviewMetaDataById is invoked', async () => {
      const data = await GET.reviews.getProductReviewMetaDataById(19100);
      expect(typeof data).toBe('object');
      expect(data.product_id).toBe('19100');
    });
  });

  describe('Questions', () => {
    it('returns an object with a results array when getProductQuestionsById is invoked', async () => {
      const data = await GET.questions.getProductQuestionsById(19100);
      expect(typeof data).toBe('object');
      expect(data.product_id).toBe('19100');
      expect(Array.isArray(data.results)).toBe(true);
    });

    it('returns an object with a results array when getAnswersForQuestionsByQuestionId is invoked', async () => {
      const data = await GET.questions.getAnswersForQuestionsByQuestionId(15);
      expect(typeof data).toBe('object');
      expect(data.question).toBe('15');
      expect(Array.isArray(data.results)).toBe(true);
    });
  });

  describe('returns an array when getCart is invoked', () => {
    it('getCart', async () => {
      const data = await GET.cart.getCart();
      expect(Array.isArray(data)).toBe(true);
    });
  });
});

describe('POST methods', () => {
  it('postReview', async () => {
    // POST.postReview({
    //   product_id: '',
    //   rating: 1,
    //   summary: '',
    //   body: '',
    //   recommend: true,
    //   name: '',
    //   email: '',
    //   photos: ['', '', ''],
    //   characteristics: {}
    // })
  })
});

describe('PUT methods', () => {

});


