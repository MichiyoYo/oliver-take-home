import React from "react";
import List from "./List";
import ReviewListItem from "./ReviewListItem";

function ReviewList({ reviews }) {
  return (
    <ul className="ReviewList">
      <List
        items={reviews}
        resourceName="review"
        itemComponent={ReviewListItem}
      />
    </ul>
  );
}

export default ReviewList;
