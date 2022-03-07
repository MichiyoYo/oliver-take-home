import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import loading from "../img/loading.gif";
import { ProductContext } from "../App";

function ProductListItem({ product }) {
  const { products, setProducts } = useContext(ProductContext);

  const { name, id } = product;
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [imgUrl, setImgUrl] = useState(loading);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/products/${id}/reviews`)
      .then((res) => {
        setReviews(res.data);
        setImgUrl(
          `https://via.assets.so/furniture.png?id=${id}&q=95&w=200&h=200&fit=fill`
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    let avg = 0;
    if (reviews.length) {
      reviews.forEach((review) => {
        avg += Number(review.star_rating);
      });
      setAvgRating(Math.floor(avg / reviews.length) || 0);
    }
  }, [reviews]);

  useEffect(() => {
    let updatedProduct = {
      ...product,
      imgUrl: imgUrl,
      avgRating: avgRating,
      reviews: reviews,
    };
    const prodToUpdateIdx = products.findIndex((prod) => prod.id === id);

    setProducts([
      ...products.slice(0, prodToUpdateIdx),
      updatedProduct,
      ...products.slice(prodToUpdateIdx + 1),
    ]);
  }, [reviews, imgUrl, avgRating, id]);

  return (
    <li className="product">
      <div className="product_box">
        <img src={imgUrl} alt={name} height="200" width="200" />
        <h2>{name}</h2>
        <Rating
          className="star-rating"
          name="read-only"
          value={avgRating}
          readOnly
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Link
          className="btn"
          to={{
            pathname: `/products/${id}`,
            state: {
              name: name,
              imgUrl: imgUrl,
              avgRating: avgRating,
              reviews: reviews,
            },
          }}
        >
          Learn More
        </Link>
      </div>
    </li>
  );
}

export default ProductListItem;
