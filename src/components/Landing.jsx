import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <aside className="aside-landing">
        <div className="aside-container">
          <h1>01</h1>
          <div className="line"></div>
          <div className="section-name">Introduction</div>
        </div>
      </aside>
      <main className="main-landing">
        <h1>
          I'm Cosmin!
          <br />
          Creative developer.
        </h1>
        <div className="divider"></div>
        <p>
          I describe myself as a passionate developer who loves to code, to
          create wonderful animations and functionalities.
          <br />
          <br />
          In addition to my job, I enjoy creating and contributing to open
          source projects. This helps me learn a lot of new things, develop as a
          developer and support other open source projects <span>❤️</span>.
        </p>
      </main>
      <div className="image-landing"></div>
    </section>
  );
};

export default Landing;
