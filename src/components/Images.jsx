import React from "react";

const Images = () => {
  return (
    <div className="images">
      <img src={require("../images/landing-plane.png")} alt="landing" />
      <img src={require("../images/about-plane.png")} alt="about" />
      <img src={require("../images/work-plane.png")} alt="work" />
      <img src={require("../images/blog-plane.png")} alt="blog" />
      <img src={require("../images/contact-plane.png")} alt="contact" />
    </div>
  );
};

export default Images;
