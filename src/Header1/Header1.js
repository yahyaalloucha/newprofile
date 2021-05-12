import React from "react";
import { Component } from "react";
import Styles from "./Header.module.css";
import mylogo from "../yaya.jpg";
import darkmode from "../darkicon.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <div className={Styles.container}>
          <div className={Styles.logo}>
            <img src={mylogo} className={Styles.mylogo}></img>
          </div>
          <div className={Styles.navlinks}>
            <Link smooth to="/" className={Styles.links}>
              Home
            </Link>

            <HashLink smooth to="/#Aboutid" className={Styles.links}>
              About
            </HashLink>

            <Link smooth to="/Contact" className={Styles.links}>
              Contact
            </Link>
          </div>

          <div className={Styles.button}>
            <img src={darkmode} className={Styles.darkmode} />
          </div>
        </div>
        <Navbar expand="lg" className={Styles.nav}>
          <img src={mylogo} className={Styles.mylogo}></img>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="colla" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className={Styles.navlinks}>
              <HashLink smooth to="/#Home" className={Styles.links}>
                Home
              </HashLink>

              <HashLink smooth to="/#About" className={Styles.links}>
                About
              </HashLink>

              <Link smooth to="/Contact" className={Styles.links}>
                Contact
              </Link>
            </div>

            <div className={Styles.button}>
              <img src={darkmode} className={Styles.darkmode} />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
