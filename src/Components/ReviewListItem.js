import React from "react";
import { Rating } from "@mui/material";

function ReviewListItem({ review }) {
  const { author, star_rating, headline, body } = review;

  return (
    <li className="review">
      <Rating name="read-only" value={star_rating} readOnly />

      <h3 className="review_headline">{headline}</h3>
      <p className="review_body">{body}</p>
      <cite className="review_author">- {author}</cite>
    </li>
  );
}

export default ReviewListItem;
