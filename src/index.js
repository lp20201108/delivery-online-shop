import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./redux/configure-store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
