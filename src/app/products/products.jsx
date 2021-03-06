import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProduct } from './action';
import RenderItems from '../../Components/render-products';

const getProducts = dispatch => {
  dispatch(fetchProduct());
}

const Products = () => {
  const dispatch = useDispatch();

  const { isLoading, hasLoaded, error: { hasError }, data } = useSelector(state => state.products);

  useEffect(() => {
    if(!data.length) {
      getProducts(dispatch);
    }
  }, [dispatch, data.length]);


  return (
  <React.Fragment>
    {isLoading && <span>Loading data...</span>}
    {hasLoaded && !hasError && <RenderItems productsList={data} />}
  </React.Fragment>
)};

export default Products;
