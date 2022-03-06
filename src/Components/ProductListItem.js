import { Button, Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function ProductListItem({ product }) {
  const { name, id } = product;

  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  let history = useHistory();

  const handleClick = () => {
    history.push(`/products/${id}`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3004/products/${id}/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    let avg = 0;
    if (reviews.length) {
      reviews.forEach((review) => {
        avg += review.star_rating;
      });
      setAvgRating(Math.floor(avg / reviews.length) || 0);
    }
  }, [reviews]);

  return (
    <li className="product">
      <img
        src="https://api.lorem.space/image/furniture?w=200&h=200"
        alt={name}
      />
      <h2>{name}</h2>
      <Rating
        className="star-rating"
        name="read-only"
        value={avgRating}
        readOnly
      />
      <Button variant="outlined" onClick={handleClick}>
        Learn More!
      </Button>
    </li>
  );
}

export default ProductListItem;
