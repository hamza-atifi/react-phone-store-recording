import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import ProductList from "./components/ProductList.jsx";
import Details from "./components/Details.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Default from "./components/Default.jsx";
import Modal from "./components/Modal.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" component={ProductList} exact />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="" component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
