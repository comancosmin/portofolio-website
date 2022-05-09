import React, { useState } from "react";

const About = () => {
  //state
  const [count, setCount] = useState(0);
  //data
  const components = [
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem
      adipisci enim culpa temporibus voluptates iste harum consequuntur tenetur
      facere.
    </p>,
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ea!</p>,
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, vitae!
      Incidunt ipsa voluptas accusantium architecto.
    </p>,
  ];
  return (
    <section className="about">
      <aside className="aside-about">
        <div className="aside-container">
          <h1>02</h1>
          <div className="line"></div>
          <div className="section-name">About me</div>
        </div>
      </aside>
      <div className="image-about"></div>
      <main className="main-about">
        <h1>Me, myself & I</h1>
        <p>
          <em>"Think twice, code once"</em>
        </p>
        <div className="about-divider"></div>
        <div className="about-data">
          <div className="data-container">
            {
              // render component from our components array
              components[count]
            }
          </div>
          <div className="button-container">
            {/* show previous button if we are not on first element */}
            {count > 0 && (
              <button onClick={() => setCount(count - 1)}>🡠 Back</button>
            )}

            {/* hide next button if we are at the last element */}
            {count < components.length - 1 && (
              <button onClick={() => setCount(count + 1)}>Next 🡢</button>
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
