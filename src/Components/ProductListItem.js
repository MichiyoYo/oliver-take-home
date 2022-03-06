import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductListItem({ product }) {
  const { name, id } = product;

  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/products/${id}/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .then(() => {
        let avg = 0;
        if (reviews.length > 0) {
          reviews.forEach((review) => {
            avg += review.star_rating;
          });

          setAvgRating(Math.floor(avg / reviews.length) || 0);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <li className="product">
      <img
        src="https://api.lorem.space/image/furniture?w=200&h=200"
        alt={name}
      />
      <h2>{name}</h2>
      <div className="star-rating">
        <Rating name="read-only" value={avgRating} readOnly />
      </div>
    </li>
  );
}

export default ProductListItem;
