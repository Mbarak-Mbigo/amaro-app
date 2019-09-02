import { getProducts } from '../productsService';

describe('getProducts', () => {
  test('getProducts returns data', async () => {
    console.log('data', process.env.NODE_ENV);
    const results = await getProducts();
    expect(results).toMatchSnapshot();
  });
})
