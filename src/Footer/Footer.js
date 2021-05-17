import React from "react";
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
              <img src={mylogo} alt="text" className={Styles.img1}></img>
              <div className={Styles.button}>Contact now</div>
            </div>
            <div className={Styles.Line}></div>
            <div className={Styles.menu}>
              <div className={Styles.Lastmenu}>
                <a
                  className={Styles.a}
                  style={{ color: theme == "dark" ? "white" : "" }}
                >
                  Home
                </a>
                <a
                  className={Styles.a}
                  style={{ color: theme == "dark" ? "white" : "" }}
                >
                  About
                </a>
                <a
                  className={Styles.a}
                  style={{ color: theme == "dark" ? "white" : "" }}
                >
                  Contact
                </a>
              </div>
              <div className={Styles.socialmedia}>
                <a href="https://www.facebook.com/yahya.footballe">
                  <img
                    src={fb}
                    href="https://www.facebook.com/yahya.footballe"
                    className={Styles.img}
                  />
                </a>
                <a>
                  <img src={lin} className={Styles.img} />
                </a>

                <a href="https://www.instagram.com/yahya_salhi_01/">
                  <img
                    src={inst}
                    alt="https://www.instagram.com/yahya_salhi_01/"
                    className={Styles.img}
                  />
                </a>
                <a>
                  <img src={twit} className={Styles.img} />
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
