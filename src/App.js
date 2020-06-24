import React, { Component } from "react";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
