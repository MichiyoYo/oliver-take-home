import { Box, Button, Grid, Rating, TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import React, { useState } from "react";
import { Link, useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";

//this is gonna be the body of the post request
const defaultValues = {
  author: "",
  headline: "",
  body: "",
  star_rating: 0,
};

function ReviewForm(props) {
  const { id } = useParams();
  const location = useLocation();
  const { name, imgUrl } = location.state;

  let history = useHistory();

  //the inputs are controlled by the state
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3004/products/${id}/reviews`, formValues)
      .then((res) => {
        setFormValues(defaultValues);
        setTimeout(() => {
          window.open("/products/", "_self");
        }, 1000);
      })
      .catch((err) => {
        console.error("Something went wrong 😿: " + err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log("input changed");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={imgUrl} alt={name} />
        </Grid>
        <Grid item xs={6}>
          <h2>{name}</h2>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid item>
                <Rating
                  name="star_rating"
                  value={Number(formValues.star_rating)}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="author-input"
                  name="author"
                  label="Author"
                  type="text"
                  value={formValues.author}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="headline-input"
                  name="headline"
                  label="Headline"
                  type="text"
                  value={formValues.headline}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="body-input"
                  name="body"
                  label="Your Review"
                  multiline
                  type="text"
                  value={formValues.body}
                  onChange={handleInputChange}
                />
              </Grid>

              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReviewForm;
