import Context from "@mui/base/TabsUnstyled/TabsContext";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Product from "./Components/Product";
import ProductList from "./Components/ProductList";

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
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <ProductList products={products} />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
