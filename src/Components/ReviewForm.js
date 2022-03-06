import { Box, Button, Grid, Rating, TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function ReviewForm(props) {
  //gets product info through the Link that takes the user on this page
  const { id } = useParams();
  const location = useLocation();
  const { name, imgUrl } = location.state;
  //lets the user fill out a form
  //onsubmit send an axiox POST request to api to add the review
  const defaultValues = {
    author: "",
    headline: "",
    body: "",
    star_rating: 0,
  };
  //the inputs are controlled by the state
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleInputChange = () => {
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
                  name="simple-controlled"
                  value={formValues.star_rating}
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
                <TextareaAutosize
                  id="body-input"
                  name="body"
                  label="Your Review"
                  type="textarea"
                  placeholder="Your Review"
                  style={{ width: 200, height: 150 }}
                  value={formValues.name}
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
