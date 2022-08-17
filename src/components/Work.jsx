import React from "react";

const Work = () => {
  return (
    <section className="work">
      <aside className="aside-work">
        <div className="aside-container">
          <h1>03</h1>
          <div className="line"></div>
          <div className="section-name">My work</div>
        </div>
      </aside>
      <main className="main-work">
        <h1>A part of me</h1>
        <div className="divider"></div>
        <h3>Latest Project</h3>
        <p className="info-project">
          Here is a music player made with React.Js with few songs and a pretty
          nice design.
          <br />
          <p className="live-preview">
            <a
              href="http://react.cosmincoman.com"
              target="_blank"
              rel="noreferrer"
            >
              Live Preview
            </a>
            <div className="blob green"></div>
          </p>
        </p>
        <br />
        <h3>More projects</h3>
        <p className="info-project">
          You can see more projects made by me on GitHub.
          <p className="live-preview">
            <a
              href="http://github.com/comancosmin"
              target="_blank"
              rel="noreferrer"
            >
              Go on GitHub
            </a>
          </p>
        </p>
      </main>
      <div className="image-work"></div>
    </section>
  );
};

export default Work;
