import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <aside className="aside-grid">
        <div className="aside-container">
          <h1>05</h1>
          <div className="line"></div>
          <div className="section-name">Contact me</div>
        </div>
      </aside>
      <main className="main-contact">
        <h1>Get in touch.</h1>
        <div className="divider"></div>
        <div className="input-group">
          <input
            required
            type="text"
            name="text"
            autoComplete="off"
            className="input"
          />
          <label className="label-name">Name</label>
          <input
            required
            type="email"
            name="email"
            autoComplete="on"
            className="input"
          />
          <label className="label-email">Email</label>
        </div>
      </main>
      <div className="image-contact"></div>
    </section>
  );
};

export default Contact;
