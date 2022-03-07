import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Product from "./Components/Product";
import ProductList from "./Components/ProductList";
import ReviewForm from "./Components/ReviewForm";

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
    <ProductContext.Provider value={{ products, setProducts }}>
      <div className="App">
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
            <Route path="/product/:id/add-review">
              <ReviewForm />
            </Route>
          </Switch>
        </Router>
      </div>
    </ProductContext.Provider>
  );
}
