import React from "react";
import { Component } from "react";
import Styles from "./Header.module.css";
import mylogo from "../yaya.jpg";

import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import CONTEX from "../CONTEX/CONTEX";

class Header extends Component {
  render() {
    return (
      <div>
        <CONTEX.Consumer>
          {({ theme, onChangeTheme }) => (
            <div className={Styles.container}>
              <div className={Styles.logo}>
                <img src={mylogo} className={Styles.mylogo} alt="my logo"></img>
              </div>
              <div className={Styles.navlinks}>
                <HashLink smooth to="/#Home" className={Styles.links}>
                  Home
                </HashLink>

                <HashLink smooth to="/#Aboutid" className={Styles.links}>
                  About
                </HashLink>

                <Link smooth to="/Contact" className={Styles.links}>
                  Contact
                </Link>
              </div>

              <div className={Styles.button}>
                {theme == "dark" ? (
                  <FiSun
                    className={Styles.darkmode}
                    onClick={() => onChangeTheme()}
                  />
                ) : (
                  <BsMoon
                    className={Styles.darkmode}
                    style={{ color: "black" }}
                    onClick={() => onChangeTheme()}
                  />
                )}
              </div>
            </div>
          )}
        </CONTEX.Consumer>
        <CONTEX.Consumer>
          {({ theme, onChangeTheme }) => (
            <Navbar expand="lg" className={Styles.nav}>
              <img src={mylogo} className={Styles.mylogo}></img>

              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="colla"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <div className={Styles.navlinks}>
                  <HashLink smooth to="/#Home" className={Styles.links}>
                    Home
                  </HashLink>

                  <HashLink smooth to="/#Aboutid" className={Styles.links}>
                    About
                  </HashLink>

                  <Link smooth to="/Contact" className={Styles.links}>
                    Contact
                  </Link>
                </div>

                <div className={Styles.button}>
                  {theme == "dark" ? (
                    <FiSun
                      className={Styles.darkmode}
                      onClick={() => onChangeTheme()}
                    />
                  ) : (
                    <BsMoon
                      className={Styles.darkmode}
                      style={{ color: "black" }}
                      onClick={() => onChangeTheme()}
                    />
                  )}
                </div>
              </Navbar.Collapse>
            </Navbar>
          )}
        </CONTEX.Consumer>
      </div>
    );
  }
}
export default Header;
