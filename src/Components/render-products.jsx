import React from 'react';
import styled from 'styled-components';

import Item from './item';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  width: 100vw;
  box-sizing: border-box;
`;


const RenderItems = ({ productsList }) => {
  return (
    <Container>
      {productsList.map((product, index) => <Item key={index} {...product} />)}
    </Container>
  )
}

export default RenderItems;
