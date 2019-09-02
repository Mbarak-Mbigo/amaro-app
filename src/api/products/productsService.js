import data from './productsData';
import { sleep } from '../utils';

// get all products
const getProducts = async () => {
  await sleep();
  return data;
}

// addProduct
// editProduct
// removeProduct
// filterProducts

export {
  getProducts,
}
