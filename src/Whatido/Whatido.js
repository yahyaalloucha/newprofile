import React from "react";
import { Component } from "react";
import Styles from "./Whatid.module.css";
import Icon from "./Icon.svg";
import web1 from "./web1png.png";

class Whatido extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div>
          <div className={Styles.titlecontainer}>
            <h1 className={Styles.h1}>Process & Pricing</h1>
            <p className={Styles.p}>
              On a personal level, I am highly-motivated, result oriented,
              self-driven, hard-working, fast learner and constantly seeking to
              improve my skills and am fully aware of the latest Front-end
              Development Tools.
              <br /> <br />A lot of my process is research and planning. we will
              talk about the project and about the process and the time of
              prcess if you need any informations about pricing.
            </p>
          </div>
          <div className={Styles.elementscard}>
            <div className={Styles.elementscard1}>
              <img src={Icon} alt="text" className={Styles.Icon} />
              <h2>UX/UI Design</h2>
              <p className={Styles.p1}>
                Need help with designing your website? I can create beautiful
                website designs based on your content, or redesign old websites
                to improve your conversions or achieve your business goals.
              </p>
            </div>
            <div className={Styles.elementscard2}>
              <img src={Icon} alt="text" className={Styles.Icon} />
              <h2>Web Development</h2>
              <p className={Styles.p1}>
                Need a fully custom website for yourself or your business? I
                create beautiful and unique designs to meet your goals and
                target audience, then i will write the code and then build them.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={web1} alt="text" className={Styles.image} />
        </div>
      </div>
    );
  }
}
export default Whatido;
