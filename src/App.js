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
  const [enhancedProducts, setEnhancedProducts] = useState([]);

  const getProducts = async () => {
    const data = await axios.get(`http://localhost:3004/products`);
    setProducts(data.data);
  };

  const getReviews = async (id) => {
    const data = await axios.get(
      `http://localhost:3004/products/${id}/reviews`
    );
    return data.data;
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products) {
      let enhancedProd = [];
      products.forEach((prod) => {
        let reviews = [];
        getReviews(prod.id)
          .then((res) => {
            reviews = res;
            let avgRating = 0;
            if (reviews.length) {
              let totRating = 0;
              reviews.forEach((rev) => {
                totRating += Number(rev.star_rating);
              });
              avgRating = Math.floor(totRating / reviews.length);
            }
            enhancedProd.push({
              ...prod,
              imgUrl: `https://via.assets.so/furniture.png?id=${prod.id}&q=95&w=200&h=200&fit=fill`,
              avgRating: avgRating,
              reviews: reviews,
            });
            console.log(enhancedProd);
            setEnhancedProducts(enhancedProd);
          })
          .catch((err) => {
            console.error(err);
          });
      });
    }
  }, [products]);

  useEffect(() => {}, [enhancedProducts]);

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
          <Route path="/product/:id/add-review">
            <ReviewForm />
          </Route>
        </Switch>
      </Router>
    </ProductContext.Provider>
  );
}
