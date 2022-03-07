import React from "react";

function List({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}

export default List;
