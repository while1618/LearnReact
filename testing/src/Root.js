import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "reducers";

export default (props) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
  );

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};
