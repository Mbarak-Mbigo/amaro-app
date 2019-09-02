import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

// import { SILVER_GREY } from './utils/colors';

// import { createGlobalStyle } from 'styled-components'

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${SILVER_GREY};
//     margin: 0;
//   }
// `

ReactDOM.render(
<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
