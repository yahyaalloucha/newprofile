import React from "react";
import { Component } from "react";
import Styles from "./Header.module.css";
import mylogo from "../yaya.jpg";
import darkmode from "../darkicon.png";

class Header extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.logo}>
          <img src={mylogo} className={Styles.mylogo}></img>
        </div>
        <div className={Styles.navlinks}>
          <a className={Styles.link}>Home</a>

          <a className={Styles.link}>About</a>

          <a className={Styles.link}>Contact</a>
        </div>

        <button className={Styles.button}>
          <img src={darkmode} className={Styles.darkmode} />
        </button>
      </div>
    );
  }
}
export default Header;
