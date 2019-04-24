import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns.jsx";
import EmptyCart from "./EmptyCart.jsx";
import { ProductConsumer } from "../../context.js";
import CartList from "./CartList.jsx";
import CartTotals from "./CartTotals.jsx";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}