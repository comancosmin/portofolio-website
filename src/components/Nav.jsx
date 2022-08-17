import React, { useState, useRef, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
//import components
import Landing from "./Landing";
import About from "./About";
import Work from "./Work";
import Blog from "./Blog";
import Contact from "./Contact";
import Song from "./Audio";

const Nav = ({ setColor1, colorData }) => {
  //set scroll position to 0 after refreshing the page
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  //there are the classes for swapping colors between the pages
  const colorChange = [
    "color-change-1",
    "color-change-2",
    "color-change-3",
    "color-change-4",
    "color-change-5",
  ];
  //useStates
  const [isOpen, setOpen] = useState(false); //for burger animation
  const [clicked, setClicked] = useState(colorChange[0]); //useState to set class on first div

  //useRefs - refs used for navigation
  const landingSection = useRef(null);
  const aboutSection = useRef(null);
  const workSection = useRef(null);
  const blogSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <div className={clicked}>
      <div className="nav">
        <div
          className="logo"
          onClick={() => {
            landingSection.current.scrollIntoView();
            setClicked(colorChange[0]);
            setColor1(colorData[0]);
          }}
        >
          <h1>cosmin.</h1>
        </div>
        <div className="hamburger">
          <div className={`nav-menu ${isOpen ? "nav-menu-active" : ""}`}>
            <div className="inside">
              <div className="menu-list">
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        landingSection.current.scrollIntoView();
                        setClicked(colorChange[0]);
                        setColor1(colorData[0]);
                      }}
                    >
                      Home
                    </button>
                  </li>
                </ul>
                <div className="divider-nav"></div>
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        aboutSection.current.scrollIntoView();
                        setClicked(colorChange[1]);
                        setColor1(colorData[1]);
                      }}
                    >
                      About
                    </button>
                  </li>
                </ul>
                <div className="divider-nav"></div>
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        workSection.current.scrollIntoView();
                        setClicked(colorChange[2]);
                        setColor1(colorData[2]);
                      }}
                    >
                      Work
                    </button>
                  </li>
                </ul>
                <div className="divider-nav"></div>
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        blogSection.current.scrollIntoView();
                        setClicked(colorChange[3]);
                        setColor1(colorData[3]);
                      }}
                    >
                      Blog
                    </button>
                  </li>
                </ul>
                <div className="divider-nav"></div>
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        contactSection.current.scrollIntoView();
                        setClicked(colorChange[4]);
                        setColor1(colorData[4]);
                      }}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div className="pagination-grid">
        <div
          className="pagination-container"
          onClick={() => {
            landingSection.current.scrollIntoView();
            setClicked(colorChange[0]);
            setColor1(colorData[0]);
          }}
        >
          <div className="pagination-line pagination-line-active-1"></div>
        </div>
        <div
          className="pagination-container"
          onClick={() => {
            aboutSection.current.scrollIntoView();
            setClicked(colorChange[1]);
            setColor1(colorData[1]);
          }}
        >
          <div className="pagination-line pagination-line-active-2"></div>
        </div>
        <div
          className="pagination-container"
          onClick={() => {
            workSection.current.scrollIntoView();
            setClicked(colorChange[2]);
            setColor1(colorData[2]);
          }}
        >
          <div className="pagination-line pagination-line-active-3"></div>
        </div>
        <div
          className="pagination-container"
          onClick={() => {
            blogSection.current.scrollIntoView();
            setClicked(colorChange[3]);
            setColor1(colorData[3]);
          }}
        >
          <div className="pagination-line pagination-line-active-4"></div>
        </div>
        <div
          className="pagination-container"
          onClick={() => {
            contactSection.current.scrollIntoView();
            setClicked(colorChange[4]);
            setColor1(colorData[4]);
          }}
        >
          <div className="pagination-line pagination-line-active-5"></div>
        </div>
        <Song />
      </div>
      <div className="home-page" ref={landingSection}>
        <Landing />
      </div>
      <div className="about-page" ref={aboutSection}>
        <About />
      </div>
      <div className="work-page" ref={workSection}>
        <Work />
      </div>
      <div className="blog-page" ref={blogSection}>
        <Blog />
      </div>
      <div className="contact-page" ref={contactSection}>
        <Contact />
      </div>
    </div>
  );
};

export default Nav;
