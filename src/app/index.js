import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import createStore from "../roots/store";
import { SILVER_GREY } from "../utils/colors";

import Dashboard from "./dashboard.jsx";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Cart from "./cart/cart";

const { store, persistor } = createStore();

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${SILVER_GREY};
    margin: 0;
  }
`;
const MainContent = styled.section`
  display: flex;
  justify-content: center;
  min-height: 77vh;
`;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Router>
        <Header>AMARO APP</Header>
        <MainContent>
          <Switch>
            <Route exact path={"/"} component={Dashboard} />
            <Route path={"/cart"} component={Cart} />
          </Switch>
        </MainContent>
        <Footer>Amaro @2019</Footer>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
