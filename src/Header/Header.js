import React from "react";
import { Component } from "react";
import Styles from "./Header.module.css";
import mylogo from "../yaya.jpg";
import darkmode from "../darkicon.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Header extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.logo}>
          <img src={mylogo} className={Styles.mylogo}></img>
        </div>
        <div className={Styles.navlinks}>
          <HashLink smooth to="/#Home" className={Styles.links}>
            Home
          </HashLink>

          <HashLink smooth to="#About" className={Styles.links}>
            About
          </HashLink>

          <Link smooth to="/Contact" className={Styles.links}>
            Contact
          </Link>
        </div>

        <button className={Styles.button}>
          <img src={darkmode} className={Styles.darkmode} />
        </button>
      </div>
    );
  }
}
export default Header;
