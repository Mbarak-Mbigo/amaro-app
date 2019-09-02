import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProduct } from './action';
import RenderItems from '../../Components/render-products';

const getProducts = dispatch => {
  dispatch(fetchProduct());
}

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const { isLoading, hasLoaded, error: { hasError, error}, data } = useSelector(state => state.products);

  console.log('products', isLoading, hasLoaded, hasError, error, data);

  return (
  <React.Fragment>
    {isLoading && <span>Loading data...</span>}
    {hasLoaded && !hasError && <RenderItems productsList={data} />}
  </React.Fragment>
)};

export default Products;
