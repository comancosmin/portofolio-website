import React, { useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
//import components
import Landing from "./Landing";
import About from "./About";
import Work from "./Work";
import Blog from "./Blog";
import Contact from "./Contact";

const Nav = ({ setColor1, colorData }) => {
  {
    //scroll on TOP when refreshing the page not working...
    /*document.querySelector("body").onbeforeunload = function () {
    window.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  };*/
  }
  //data
  const colorChange = [
    "color-change-1",
    "color-change-2",
    "color-change-3",
    "color-change-4",
    "color-change-5",
  ];
  //useStates
  const [isOpen, setOpen] = useState(false);
  const [clicked, setClicked] = useState(colorChange[0]);

  //useRefs
  const landingSection = useRef(null);
  const aboutSection = useRef(null);
  const workSection = useRef(null);
  const blogSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <div className={`${clicked}`}>
      <div className="nav">
        <div className="logo">
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
      </div>
      <div ref={landingSection}>
        <Landing />
      </div>
      <div ref={aboutSection}>
        <About />
      </div>
      <div ref={workSection}>
        <Work />
      </div>
      <div ref={blogSection}>
        <Blog />
      </div>
      <div ref={contactSection}>
        <Contact />
      </div>
    </div>
  );
};

export default Nav;
