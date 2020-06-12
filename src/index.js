import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"
import { createGlobalStyle } from "styled-components";
import Routes from "./Routes";
import reducer from "./redux/reducers"


const GlobalStyle = createGlobalStyle`

  /* other styles */

*{
    box-sizing:border-box;
}

body{
    background-color:#ffffff;
    font-family: 'Noto Sans KR', sans-serif;
    color:black;

}
a {
    color:inherit;
    text-decoration:none;
    cursor: pointer;
}
input, button {
    background-color: transparent;
    border: none;
    outline: none;
}
ol, ul, li {
    margin: 0;
    padding: 0;
    list-style:none;
}
img {
    display: block;
    width: 100%;
    height: 100%;
}
`;


const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devTools);

ReactDOM.render(
  < Provider store={store}>
    <GlobalStyle />
    <Routes />
  </ Provider>,
  document.getElementById("root")
);

