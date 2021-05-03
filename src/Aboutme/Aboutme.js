import React from "react";
import { Component } from "react";
import Styles from "./Aboutme.module.css";

class Aboutme extends Component {
  render() {
    return (
      <div
        className={Styles.container}
        style={{
          backgroundImage: "url('./bgabout.svg')",
        }}
      >
        <div className={Styles.text}>
          <h1 className={Styles.tit}>About me</h1>
          <p className={Styles.p}>
            Are you interested to know who I'm?, if your answer is yes, in this
            part, I'm going to talk about myself. <br></br> I've been studying
            web development for a year now, and I've come to realize that this
            is something that I want to do professionally in the future because
            I enjoy doing technical tasks.<br></br> Also, I'm constantly
            studying new technologies and I'm ready to move forward in this
            direction.<br></br> highly motivated to study other technologies and
            to talk and meet with other peoples for benefit from their
            experience and knowledge.
          </p>
        </div>
        <div className={Styles.buttconatiner}>
          <p className={Styles.p2}>I'm waiting </p>
          <div className={Styles.button}>Contact Now</div>
        </div>
      </div>
    );
  }
}
export default Aboutme;
