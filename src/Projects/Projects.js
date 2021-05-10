import React from "react";
import { Component } from "react";
import Styles from "./Projects.module.css";

class Projects extends Component {
  render() {
    const {
      img,
      title,
      description,
      atext,
      linke,
      buttonText,
      buttonUrl,
    } = this.props;
    return (
      <div className={Styles.container} id="MYWORK">
        <div className={Styles.divimage}>
          <img src={img} alt="text" className={Styles.projimg} />
        </div>
        <div className={Styles.text}>
          <h1 className={Styles.h1}>{title}</h1>
          <p className={Styles.p}>{description}</p>
          <a href={linke}>{atext}</a>

          {buttonText != null && buttonText != "" ? (
            <a className={Styles.button} href={buttonUrl}>
              {buttonText}
            </a>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Projects;
