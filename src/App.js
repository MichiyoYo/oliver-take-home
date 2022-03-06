import Context from "@mui/base/TabsUnstyled/TabsContext";
import { create } from "@mui/material/styles/createTransitions";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Product from "./Components/Product";
import ProductList from "./Components/ProductList";

export const ProductContext = createContext();

export default function OliverTakeHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>
      </Router>
    </ProductContext.Provider>
  );
}
