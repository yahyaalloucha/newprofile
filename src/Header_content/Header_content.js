import React from "react";
import { Component } from "react";
import styles from "./Header_content.module.css";
import Softoware from "./Softoware.png";
import { HashLink } from "react-router-hash-link";
import CONTEX from "../CONTEX/CONTEX";

class Header_content extends Component {
  render() {
    return (
      <CONTEX.Consumer>
        {({ theme, onChangeTheme }) => (
          <div className={styles.firstcontainer} id="Home">
            <div className={styles.container}>
              <div className={styles.title}>
                <h1
                  className={styles.h1}
                  style={{ color: theme == "dark" ? "white" : "" }}
                >
                  Hello, I'm Yahya<br></br> Welcome to my profile.
                </h1>
                <p className={styles.text}>
                  Hello, I'm Yahya Alloucha from Morocco in my early twenties,
                  <br></br>
                  I'm an enthusiastic and detail-oriented Frontend Software
                  Engineer
                  <br></br>
                  seeking an entry-level position with Company to use my skills
                  in coding,
                  <br></br>
                  <br></br> troubleshooting complex problems,<br></br> and
                  assisting in the timely completion of projects.
                </p>
              </div>
              <div className={styles.buttons}>
                <div className={styles.button1}>
                  <HashLink smooth to="/#MYWORK" className={styles.a1}>
                    My Work
                  </HashLink>
                </div>
                <div className={styles.button2}>
                  <a href="#LET'S TALK" className={styles.a2}>
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
            <img src={Softoware} className={styles.img}></img>
          </div>
        )}
      </CONTEX.Consumer>
    );
  }
}
export default Header_content;
