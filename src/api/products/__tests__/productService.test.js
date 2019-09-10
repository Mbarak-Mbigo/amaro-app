import { getProducts } from '../productsService';

describe('getProducts', () => {
  test('getProducts returns data', async () => {
    const results = await getProducts();
    expect(results).toMatchSnapshot();
  });
})
