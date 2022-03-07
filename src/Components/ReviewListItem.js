import React from "react";
import { Rating, Avatar } from "@mui/material";

function ReviewListItem({ review }) {
  const { author, star_rating, headline, body } = review;

  return (
    <li className="ReviewListItem">
      <div className="review_author">
        <Avatar
          className="author_avatar"
          alt={author}
          src={`https://avatars.dicebear.com/api/human/${author}.svg`}
        />
        <div className="right-wrapper">
          <h3 className="author_name">{author}</h3>
          <Rating
            className="review_rating"
            name="read-only"
            value={star_rating}
            readOnly
          />
        </div>
      </div>

      <h4 className="review_headline">{headline}</h4>
      <p className="review_body">{body}</p>
    </li>
  );
}

export default ReviewListItem;
