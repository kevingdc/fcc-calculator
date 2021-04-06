import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";

import store from "./store";

import GlobalStyle from "./styles/GlobaStyle";
import Theme from "./styles/Theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Theme>
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
