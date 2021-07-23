// DOCS: https://jestjs.io/docs/expect
import GET from './GET';

describe('GET methods', () => {

  it('expects getProducts method to return an array of five objects', async () => {
    const data = await GET.products.getProducts(1, 5);
    expect(data.length).toBe(5);
    for (let i = 0; i < data.length; i++) {
      expect(typeof data[i]).toBe('object');
      expect(data[i].campus).toBe('hr-rfe');
    }
  });

});

describe('POST methods', () => {

});

describe('PUT methods', () => {

});


