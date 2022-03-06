import React from "react";
import List from "./List";
import ProductListItem from "./ProductListItem";

function ProductList({ products }) {
  return (
    <List
      items={products}
      resourceName="product"
      itemComponent={ProductListItem}
    />
  );
}

export default ProductList;
