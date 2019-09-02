import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchProduct } from './action';

const getProducts = dispatch => {
  dispatch(fetchProduct());
}

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  })

  return (
  <div>
    Products
  </div>
)};

export default Products;
