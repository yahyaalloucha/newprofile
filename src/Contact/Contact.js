import React from "react";
import { Component } from "react";
import CONTEX from "../CONTEX/CONTEX";
import Header from "../Header/Header";
import Styles from "./Contact.module.css";
import facebook from "./facebookda.svg";
import instagram from "./instada.svg";
import linked from "./linkedindar.svg";
import twiter from "./twitterda.svg";

class Contact extends Component {
  render() {
    return (
      <CONTEX.Consumer>
        {({ theme }) => (
          <div
            className={Styles.container}
            style={{ backgroundColor: theme === "dark" ? "black" : "white" }}
          >
            <Header />
            <div className={Styles.containertow}>
              <div className={Styles.container_1}>
                <h1
                  className={Styles.just}
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Just say hi.
                </h1>

                <div className="containertext">
                  <p style={{ color: theme === "dark" ? "white" : "" }}>
                    I am always open to discuss your project, improve your
                    online presence or help with your UX/UI design challenges.
                  </p>
                </div>
                <div
                  className={Styles.subtextcontact}
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Email me at
                </div>
                <div className={Styles.emaillinkcontainer}>
                  <a
                    href="hjhj"
                    className={Styles.emaillink}
                    style={{ color: theme === "dark" ? "white" : "" }}
                  >
                    yahyaalloucha01@gmail.com
                  </a>
                </div>
                <div className={Styles.iconsocial}>
                  <div className={Styles.subtextcontact} id="follow">
                    Follow
                  </div>
                  <div className={Styles.icon_s}>
                    <a
                      href="https://www.facebook.com/yahya.footballe/"
                      className="aa"
                    >
                      <img src={facebook} alt="" className={Styles.facebook} />
                    </a>
                    <a
                      href="https://www.instagram.com/yahya_salhi_01/"
                      className={Styles.aa}
                    >
                      <img
                        src={instagram}
                        alt=""
                        className={Styles.instagram}
                      />
                    </a>
                    <a href="klkjg" className={Styles.aa}>
                      <img
                        src={linked}
                        alt="linkedin "
                        className={Styles.linkedin}
                      />
                    </a>
                    <a href="" className={Styles.aa}>
                      <img
                        src={twiter}
                        alt="twiter"
                        className={Styles.twiter}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className={Styles.inpu} id="contactid">
                <form
                  action="https://send.pageclip.co/fq3XsvzFs64kc4out7Fv8SlF9GKPZy5i/yahyaprofile"
                  class="pageclip-form"
                  method="post"
                >
                  <h2
                    className="form-heading-tablet"
                    style={{ color: theme === "dark" ? "white" : "" }}
                  >
                    Or use the form below
                  </h2>

                  <div className="divinp">
                    <input
                      type="text"
                      className={Styles.form_input}
                      maxLength="256"
                      name="Name"
                      data-name="Name"
                      placeholder="Your name*"
                      id="Name"
                      required=""
                    />
                  </div>
                  <div className="divinp">
                    <input
                      type="email"
                      className={Styles.form_input}
                      maxLength="256"
                      name="Email"
                      data-name="Email"
                      placeholder="Your email*"
                      id="Email"
                      required=""
                    />
                  </div>
                  <div className="divinp">
                    <input
                      type="text"
                      className={Styles.form_input}
                      maxLength="256"
                      name="Website"
                      data-name="Website"
                      placeholder="Your website (if exists)"
                      id="Website"
                    />
                  </div>
                  <div className="biginp">
                    <textarea
                      placeholder="How can I help?*"
                      maxLength="8000"
                      id="Message"
                      name="Message"
                      data-name="Message"
                      required=""
                      className={Styles.form_input}
                      spellCheck="false"
                    ></textarea>
                  </div>
                  <div className={Styles.divbutt} type="submit">
                    <button className={Styles.butt} type="submit">
                      Get In Touch
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </CONTEX.Consumer>
    );
  }
}
export default Contact;
