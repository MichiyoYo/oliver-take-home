import React from "react";
import { Grid, Rating, Box } from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";
import ReviewList from "./ReviewList";

function Product(props) {
  const { id } = useParams();
  const location = useLocation();
  const { name, imgUrl, avgRating, reviews } = location.state;

  console.log(location);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={imgUrl} alt={name} />
        </Grid>
        <Grid item xs={6}>
          <h2>{name}</h2>
          <div className="reviews">
            <Rating
              className="revies_stars"
              name="read-only"
              value={avgRating}
              readOnly
            />
            <p>
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>Reviews</h3>
            <ReviewList reviews={reviews} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Product;
