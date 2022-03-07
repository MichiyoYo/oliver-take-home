import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <img
          src="https://res.cloudinary.com/hwery4evq/image/upload/c_scale,w_400/v1/assets/toast"
          alt="welcome"
        />
        <h1>Welcome!</h1>

        <h2>Oliver Space Take-Home Instructions</h2>
        <p>
          Your mission, if you choose to accept it, is to build out a mock of a
          product reviews flow. This includes a page for users to submit their
          reviews as well as a page to read reviews.
        </p>
        <h3>Requirements</h3>
        <ul>
          <li>
            Create a page where a user can review a given product with the
            following information:
          </li>
          <ul>
            <li>Their name (the author)</li>
            <li>A star rating</li>
            <li>Headline text (a title for their review)</li>
            <li>The body of the review (a longer paragraph)</li>
          </ul>
          <li>
            Create a page where a user can view all of the reviews for a given
            product
          </li>
        </ul>
        <p>
          Please spend 2 hours completing this task to whatever extent you can
          finish, but don't go over time. The expectation is not that you will
          get through all of the requirements, so please add notes on anything
          else you would have done with more time. Feel free to use any
          third-party libraries that you find helpful.
        </p>

        <h3>Running the App</h3>
        <ul>
          <li>
            Run <code>npm install</code> first
          </li>
          <li>
            Start the mock JSON server on port 3004 using{" "}
            <code>json-server --watch db.json</code>
          </li>
          <li>
            Start the React app on port 3000 using <code>npm start</code>
          </li>
          <li>
            You can then make requests to{" "}
            <code>http://localhost:3004/products</code>,{" "}
            <code>http://localhost:3004/reviews</code> or{" "}
            <code>http://localhost:3004/products/:id/reviews</code> using axios,
            or any of your preferred methods
          </li>
        </ul>
        <p>
          More info on json-server{" "}
          <a href="https://www.npmjs.com/package/json-server">here</a>
        </p>

        <p>
          This project was bootstrapped with{" "}
          <a href="https://github.com/facebook/create-react-app">
            Create React App
          </a>
        </p>

        <h4>
          Best of luck! Feel free to email{" "}
          <a href="mailto:frontend-eng@oliver.space">
            frontend-eng@oliver.space
          </a>
          if you have any questions while you're completing the exercise. We're
          happy to help :)
        </h4>
      </div>
    );
  }
}
export default Home;
