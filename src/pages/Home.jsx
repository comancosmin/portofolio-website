import React, { useState } from "react";
import AnimatedCursor from "../components/lib/AnimatedCursor";
//import Components
import Nav from "../components/Nav";
import Images from "../components/Images";

const Home = () => {
  const colorData = [
    "33, 33, 33",
    "236, 236, 236",
    "16, 16, 16",
    "236, 236, 236",
    "33, 33, 33",
  ]; //set data for background color from animated cursor js
  const [color1, setColor1] = useState(colorData[0]);

  return (
    <>
      <Images />
      {/* <AnimatedCursor color1={color1} /> */}
      <div className="nav-container">
        <Nav setColor1={setColor1} colorData={colorData} />
      </div>
    </>
  );
};
export default Home;
