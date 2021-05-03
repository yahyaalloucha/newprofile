import React from "react";
import { Component } from "react";
import styles from "./Header_content.module.css";
import Softoware from "./Softoware.png";

class Header_content extends Component {
  render() {
    return (
      <div className={styles.firstcontainer}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1 className={styles.h1}>
              Hello, I'm Yahya<br></br> Welcome to my profile.
            </h1>
            <p className={styles.text}>
              Hello, I'm Yahya Alloucha from Morocco in my early twenties,
              <br></br>
              I'm an enthusiastic and detail-oriented Frontend Software Engineer
              <br></br>
              seeking an entry-level position with Company to use my skills in
              coding,
              <br></br>
              <br></br> troubleshooting complex problems,<br></br> and assisting
              in the timely completion of projects.
            </p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button1}>My Work</div>
            <div className={styles.button2}>Let's Talk</div>
          </div>
        </div>
        <img src={Softoware} className={styles.img}></img>
      </div>
    );
  }
}
export default Header_content;
