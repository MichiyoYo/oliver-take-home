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
      <h4>{author}</h4>
      <Rating name="read-only" value={star_rating} readOnly />
      <h3 className="review_headline">{headline}</h3>
      <p className="review_body">{body}</p>
    </li>
  );
}

export default ReviewListItem;
