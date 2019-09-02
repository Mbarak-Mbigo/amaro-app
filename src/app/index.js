import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Provider } from 'react-redux' 
import store from '../roots/store';
import { SILVER_GREY } from '../utils/colors';

import Dashboard from './dashboard.jsx'
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navigation from '../Components/navigation'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${SILVER_GREY};
    margin: 0;
  }
`
const MainContent = styled.section`
  display: flex;
  justify-content: center;
  min-height: 77vh;
`;

const App = () => (
  <Provider store={store}>
      <GlobalStyle />
      <Header>
        AMARO APP
      </Header>
      <Navigation handleAddProduct={() => {}} />
      <MainContent>
        <Dashboard />
      </MainContent>
      <Footer>
        Amaro @2019
      </Footer>
  </Provider>
  );

export default App;
