import React from "react";
import { Component } from "react";

import { BrowserRouter as Link } from "react-router-dom";
import Contact from "../Contact/Contact";

import Styles from "./Aboutme.module.css";
import CONTEX from "../CONTEX/CONTEX";

class Aboutme extends Component {
  ClickHandler() {
    <Contact />;
  }
  render() {
    return (
      <CONTEX.Consumer>
        {({ theme }) => (
          <div
            id="Aboutid"
            className={Styles.container}
            style={{
              backgroundImage:
                theme === "light" ? "url('./bgabout.svg')" : "none",
            }}
          >
            <div className={Styles.text}>
              <h1
                className={Styles.tit}
                style={{ color: theme === "dark" ? "white" : "" }}
              >
                About me
              </h1>
              <p className={Styles.p}>
                Are you interested to know who I'm?, if your answer is yes, in
                this part, I'm going to talk about myself. <br></br> I've been
                studying web development for a year now, and I've come to
                realize that this is something that I want to do professionally
                in the future because I enjoy doing technical tasks.<br></br>{" "}
                Also, I'm constantly studying new technologies and I'm ready to
                move forward in this direction.<br></br> highly motivated to
                study other technologies and to talk and meet with other peoples
                for benefit from their experience and knowledge.
              </p>
            </div>
            <div className={Styles.buttconatiner}>
              <p
                className={Styles.p2}
                style={{ color: theme === "dark" ? "white" : "" }}
              >
                I'm waiting{" "}
              </p>
              <Link smooth to="/Contact" className={Styles.Linkr}>
                <div className={Styles.button}>Contact Now</div>
              </Link>
            </div>
          </div>
        )}
      </CONTEX.Consumer>
    );
  }
}
export default Aboutme;
