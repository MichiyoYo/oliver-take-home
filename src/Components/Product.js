import React from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  let { id } = useParams();
  return <div>this is a product page {id}</div>;
}

export default Product;
