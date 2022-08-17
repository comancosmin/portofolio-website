import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

const Contact = () => {
  //email.js workflow
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_blxubzj",
        "template_twn04bh",
        form.current,
        "wJ0Sy1hRloFjutxEz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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
        <h1>Get in touch?</h1>
        <div className="divider"></div>
        <div className="input-container">
          <form className="input-group" ref={form} onSubmit={sendEmail}>
            <div className="input-name-email">
              <div className="input-name">
                <input
                  required
                  type="text"
                  name="user_name"
                  autoComplete="off"
                  className="input"
                />
                <label className="label-name">Name</label>
              </div>
              <div className="input-email">
                <div className="container-email">
                  <input
                    required
                    type="email"
                    name="user_email"
                    autoComplete="off"
                    className="input"
                  />
                  <label className="label-email">Email</label>
                </div>
              </div>
            </div>
            <div className="input-subject">
              <input
                required
                type="text"
                name="subject"
                autoComplete="off"
                className="input input-subject"
              />
              <label className="label-subject">Subject</label>
            </div>
            <div className="input-textarea">
              <textarea
                required
                type="text"
                name="message"
                autoComplete="off"
                className="input input-textarea"
              />
              <label className="label-textarea">Message</label>
            </div>
            <input type="submit" value="" className="send-button" />
            <label className="submit-label">
              <FiSend color="#ececec" size={24} type="submit" />
            </label>
          </form>
          <div className="social-media">
            <a
              href="https://github.com/comancosmin"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/cosmin-coman-3142851b1/"
              target="_blank "
              rel="noreferrer"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://www.instagram.com/dev_cosmin/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://twitter.com/dev_cosmin"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoTwitter />
            </a>
          </div>
        </div>
        <footer>
          <div className="terms">
            <a href="http://">Privacy</a>
            <a href="http://">Terms</a>
            <a href="http://">Credits</a>
          </div>
        </footer>
      </main>
      <div className="image-contact"></div>
    </section>
  );
};

export default Contact;
