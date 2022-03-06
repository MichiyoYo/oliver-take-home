import { Button, Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import loading from "../img/loading.gif";

function ProductListItem({ product }) {
  const { name, id } = product;

  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [imgUrl, setImgUrl] = useState(loading);

  let history = useHistory();

  const handleClick = () => {
    history.push(`/products/${id}`);
  };

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
        avg += review.star_rating;
      });
      setAvgRating(Math.floor(avg / reviews.length) || 0);
    }
  }, [reviews]);

  return (
    <li className="product">
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <Rating
        className="star-rating"
        name="read-only"
        value={avgRating}
        readOnly
      />
      <p>
        Meow and walk away slap the dog because cats rule instead of drinking
        water from the cat bowl, make sure to steal water from the toilet. Make
        muffins.
      </p>

      <Button variant="outlined" onClick={handleClick}>
        Learn More!
      </Button>
    </li>
  );
}

export default ProductListItem;
