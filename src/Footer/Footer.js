import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Component } from "react";
import Styles from "./Footer.module.css";
import mylogo from "../yaya.jpg";
import fb from "./fb.svg";
import twit from "./twit.svg";

import inst from "./insta.svg";
import lin from "./lin.svg";
import CONTEX from "../CONTEX/CONTEX";

class Footer extends Component {
  render() {
    return (
      <CONTEX.Consumer>
        {({ theme }) => (
          <div
            className={Styles.container}
            style={{ backgroundColor: theme == "dark" ? "black" : "" }}
          >
            <div className={Styles.lastdiv}>
              <p
                className={Styles.copyright}
                style={{ color: theme == "dark" ? "white" : "" }}
              >
                ©2020 Yourcompany
              </p>
              <img
                src={mylogo}
                alt="text"
                className={Styles.img1}
                alt="my logo"
              ></img>
              <div className={Styles.button}>Contact now</div>
            </div>
            <div className={Styles.Line}></div>
            <div className={Styles.menu}>
              <div className={Styles.Lastmenu}>
                <HashLink
                  smooth
                  to="/#Home"
                  className={Styles.a}
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Home
                </HashLink>

                <HashLink
                  smooth
                  to="/#Aboutid"
                  className={Styles.a}
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  About
                </HashLink>
                <Link
                  smooth
                  to="/Contact"
                  className={Styles.a}
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Contact
                </Link>
              </div>
              <div className={Styles.socialmedia}>
                <a href="https://www.facebook.com/yahya.footballe">
                  <img
                    src={fb}
                    href="https://www.facebook.com/yahya.footballe"
                    className={Styles.img}
                    alt="my facebook"
                  />
                </a>
                <a href="https://www.linkedin.com/in/yahya-alloucha-6016a7198/">
                  <img src={lin} className={Styles.img} alt="my linked" />
                </a>

                <a href="https://www.instagram.com/yahya_salhi_01/">
                  <img
                    src={inst}
                    alt="https://www.instagram.com/yahya_salhi_01/"
                    className={Styles.img}
                    alt="my instagram"
                  />
                </a>
                <a href="https://twitter.com/?lang=en">
                  <img src={twit} className={Styles.img} alt="my twiter" />
                </a>
              </div>
            </div>
          </div>
        )}
      </CONTEX.Consumer>
    );
  }
}
export default Footer;
