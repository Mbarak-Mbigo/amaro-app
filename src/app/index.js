import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

import { Provider } from 'react-redux' 
import store from '../roots/store';
import { SILVER_GREY } from '../utils/colors';

import Products from './products/products.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${SILVER_GREY};
    margin: 0;
  }
`
const Container = styled.div``;

const Header = styled.header`
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`

const MainContent = styled.section`
  display: flex;
  justify-content: center;
  border: 2px solid red;
  height: calc(100vh - 288px)
`;

const Footer = styled.footer`
  border: 2px solid green;
  height: 98px;
`;

const App = () => (
  <Provider store={store}>
      <Container>
      <GlobalStyle />
      <Header>Header Part</Header>
      <MainContent>
        <Products/>
      </MainContent>
      <Footer>
        Footer
      </Footer>
      </Container>
  </Provider>
  );

export default App;
