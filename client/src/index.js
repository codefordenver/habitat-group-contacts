import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";

require("dotenv").config();

const createStoreWithMiddleware = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>,

  document.getElementById("root")
  //or? document.querySelector('#root')
);
registerServiceWorker();






