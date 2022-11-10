import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Login,
  MapsPage,
  Validation,
  Prescribe,
  Test,
  OrderDetails,
  Checkout,
  CreateAccount,
  UserLinkCreateAccount
  
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mapPage" element={<MapsPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/OrderDetails" element={<OrderDetails />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/validation" element={<Validation />} />
      <Route path="/prescribe" element={<Prescribe />} />
      <Route path="/userLink" element={<UserLinkCreateAccount />} />
    </Routes>

  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
