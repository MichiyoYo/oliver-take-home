import React from "react";
import List from "./List";
import ReviewListItem from "./ReviewListItem";

function ReviewList({ reviews }) {
  return (
    <List
      items={reviews}
      resourceName="review"
      itemComponent={ReviewListItem}
    />
  );
}

export default ReviewList;
