import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";
import ReduxPromise from "redux-promise"; //Need to refactor promise actions to redux-thunk
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

import App from "./App";
import reducers from "./reducers";

const createStoreWithMiddleware = createStore(
  reducers,composeWithDevTools(
  applyMiddleware(reduxThunk, ReduxPromise))
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>,

  document.getElementById("root")
);
