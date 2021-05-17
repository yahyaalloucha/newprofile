import React from "react";
import { Component } from "react";
import CONTEX from "../CONTEX/CONTEX";
import Styles from "./Projects.module.css";

class Projects extends Component {
  render() {
    const { img, title, description, atext, linke, buttonText, buttonUrl } =
      this.props;
    return (
      <CONTEX.Consumer>
        {({ theme }) => (
          <div className={Styles.container} id="MYWORK">
            <div className={Styles.divimage}>
              <img src={img} alt="text" className={Styles.projimg} />
            </div>
            <div className={Styles.text}>
              <h1
                className={Styles.h1}
                style={{ color: theme == "dark" ? "white" : "" }}
              >
                {title}
              </h1>
              <p className={Styles.p}>{description}</p>
              <a href={linke} style={{ color: theme == "dark" ? "white" : "" }}>
                {atext}
              </a>

              {buttonText != null && buttonText != "" ? (
                <a className={Styles.button} href={buttonUrl}>
                  {buttonText}
                </a>
              ) : null}
            </div>
          </div>
        )}
      </CONTEX.Consumer>
    );
  }
}
export default Projects;
