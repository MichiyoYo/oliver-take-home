import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
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
          <Route path="/products">
            <ProductList products={products} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
