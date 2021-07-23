import GET from './GET';
import jest from 'jest';

let getProducts = GET.products.getProducts;

test('expect get method to pass?', async () => {
  const data = await getProducts(1, 5);
  expect(data).toBe(true);
});
