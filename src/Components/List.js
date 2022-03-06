import React from "react";

function List({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <ul>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </ul>
  );
}

export default List;
