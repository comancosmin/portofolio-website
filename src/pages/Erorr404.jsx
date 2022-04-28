import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-404">
      <h1>
        4
        <FiAlertTriangle color="yellow" className="error-svg"></FiAlertTriangle>
        4
      </h1>
      <h2>Error 404: Page not found</h2>
      <p>Sorry, the page you're looking for doesn't exit. 😢</p>
      <Link to="/">
        Go back
        <AiOutlineArrowRight className="arrow-svg"></AiOutlineArrowRight>
      </Link>
    </div>
  );
};

export default Error404;
