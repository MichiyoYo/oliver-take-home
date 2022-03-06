import React from "react";
import { Rating, Avatar } from "@mui/material";

function ReviewListItem({ review }) {
  const { author, star_rating, headline, body } = review;

  return (
    <li className="review">
      <Avatar
        alt={author}
        src={`https://avatars.dicebear.com/api/human/${author}.svg`}
      />
      <h3>{author}</h3>
      <Rating name="read-only" value={star_rating} readOnly />
      <h4 className="review_headline">{headline}</h4>
      <p className="review_body">{body}</p>
    </li>
  );
}

export default ReviewListItem;
