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
        <h1>Some Projects</h1>
        <div className="divider"></div>
        <h3>Latest Project</h3>
        <p className="info-project">
          Here is a music player made with React.Js with few songs and a pretty
          nice design.
          <br />
          <p className="live-preview">
            <a href="http://react.cosmincoman.com">react.cosmincoman.com</a> -
            Live Preview
          </p>
        </p>
        <br />
        <h3>All projects</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum
          dignissimos vero.
        </p>
      </main>
      <div className="image-work"></div>
    </section>
  );
};

export default Work;
