import { Box, Button, Grid, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
        }, 500);
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
    <div className="ReviewForm">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={12} className="grid-item">
            <h2>{name}</h2>
            <img src={imgUrl} alt={name} />
          </Grid>
        </Grid>
        <Grid
          className="form-container"
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={12} className="grid-item">
            <form className="form" onSubmit={handleSubmit}>
              <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
              >
                <Grid className="form_grid-item" item>
                  <Rating
                    name="star_rating"
                    value={Number(formValues.star_rating)}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className="form_grid-item" item>
                  <TextField
                    id="author-input"
                    name="author"
                    label="Author"
                    type="text"
                    value={formValues.author}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid className="form_grid-item" item>
                  <TextField
                    id="headline-input"
                    name="headline"
                    label="Headline"
                    type="text"
                    value={formValues.headline}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid className="form_grid-item" item>
                  <TextField
                    id="body-input"
                    name="body"
                    label="Your Review"
                    multiline
                    type="text"
                    value={formValues.body}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>

                <Button
                  className="btn button-btn"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ReviewForm;
