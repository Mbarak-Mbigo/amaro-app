import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

import { SILVER_GREY } from '../utils/colors';

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
      <Container>
      <GlobalStyle />
      <Header>Header Part</Header>
      <MainContent>
        App
      </MainContent>
      <Footer>
        Footer
      </Footer>
      </Container>
  );

export default App;
