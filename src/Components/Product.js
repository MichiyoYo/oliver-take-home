import React from "react";
import { Grid, Typography, Rating, Button, Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import ReviewList from "./ReviewList";

function Product(props) {
  const location = useLocation();
  const { id } = useParams();
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
          <Rating name="read-only" value={avgRating} readOnly />
          <Button variant="outlined">Review it</Button>
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
