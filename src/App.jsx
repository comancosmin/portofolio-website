import React from "react";
//import Styles
import "./styles/root.scss";
//import pages
import Error404 from "./pages/Erorr404";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
//import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  //this is not working because there isn't any audio tags on the webpage
  window.onload = function () {
    var backgroundAudio = document.getElementsByTagName("audio");
    backgroundAudio.volume = 0.2;
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
