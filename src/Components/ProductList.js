import React, { useContext } from "react";
import { ProductContext } from "../App";
import List from "./List";
import ProductListItem from "./ProductListItem";

function ProductList(props) {
  const { products } = useContext(ProductContext);

  return (
    <List
      items={products}
      resourceName="product"
      itemComponent={ProductListItem}
    />
  );
}

export default ProductList;
