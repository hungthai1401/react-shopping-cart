import React, { Component } from "react";
import Container from "./Container";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import product from "../reducers/product";
import cart from "../reducers/cart";

const rootReducer = combineReducers({
  products: product,
  items: cart
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
