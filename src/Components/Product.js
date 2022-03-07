import React, { useContext } from "react";
import { Grid, Rating, Box } from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import { ProductContext } from "../App";

function Product(props) {
  const { id } = useParams();
  const location = useLocation();
  const { name, imgUrl, avgRating, reviews } = location.state;

  return (
    <div className="Product">
      <Box sx={{ flexGrow: 1 }}>
        <Grid className="product_header" container spacing={{ xs: 2, md: 3 }}>
          <Grid item sm={12} md={6}>
            <img className="product_img" src={imgUrl} alt={name} />
          </Grid>
          <Grid item sm={12} md={6}>
            <h2>{name}</h2>
            <div className="product_reviews">
              <Rating
                className="revies_stars"
                name="read-only"
                value={avgRating}
                readOnly
              />
              <p className="product_avg">
                From <span className="reviews_number">{reviews.length}</span>{" "}
                review{reviews.length === 1 ? "" : "s"}
              </p>
            </div>
            <Link
              className="btn"
              to={{
                pathname: `/product/${id}/add-review`,
                state: {
                  imgUrl: imgUrl,
                  name: name,
                },
              }}
            >
              Review it
            </Link>
          </Grid>
        </Grid>
        {reviews.length > 0 && (
          <Grid className="product_reviews" container spacing={2}>
            <Grid item xs={12}>
              <h2>Reviews</h2>
              <ReviewList reviews={reviews} />
            </Grid>
          </Grid>
        )}
      </Box>
    </div>
  );
}

export default Product;
