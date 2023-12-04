import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./ExamTwoPrep/redux/store";
// import store from "./redux/WhatsApp/store";
// import store from "./redux/Tasks/store";
// import store from "./redux/CRUD/store";
// import { store } from "./redux/Social/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
