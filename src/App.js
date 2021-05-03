import "./App.css";
import React from "react";
import { Component } from "react";
import Projects from "./Projects/Projects";
import Landi from "./Landi.png";
import lastproj from "./lastproj.jpg";
import corona from "./coronastat.png";
import Header from "./Header/Header";
import Header_content from "./Header_content/Header_content";
import Whatido from "./Whatido/Whatido";
import Aboutme from "./Aboutme/Aboutme";
import Footer from "./Footer/Footer";
import devimg from "./devimg.jpg";
class App extends Component {
  render() {
    const Proj = {
      imgUrl: lastproj,
      title: "Pomodoro Timer",
      description:
        "pomodoroTimer timer helps you manage your work and helps you by arranging your time . I worked on this project through Rect js technology. See project pomodoroTimer.",
      atext: "Visit Pomodoro Time",
      link: "https://yahyapomodorotimer.netlify.app/",
    };
    const Proj1 = {
      imgUrl: corona,
      title: "Statistics of COV19",
      description:
        "Website using this web site, you can get the last statistics about COVID 19.I built this project with React js.See project Statistics of COV19.",
      atext: "Visit Statistics of COV19",
      link: "https://gracious-jepsen-0f8026.netlify.app/",
    };

    const Proj2 = {
      imgUrl: Landi,
      title: "Landie",
      description:
        "Landie it's a website to buy a product, I worked on this project with technologies react js, react-bootstrap, and Figma.",
      atext: "Visit Landie",
      link: "https://flamboyant-almeida-af0295.netlify.app/",
      buttonText: "go to mygithub",
      buttonUrl: "https://github.com/yahyaalloucha/",
    };
    return (
      <div className="container-app">
        <div
          className="divbg"
          style={{
            backgroundImage: "url('/Path.svg')",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundPosition: "top right",
            backgroundSize: "contain",
          }}
        >
          <Header />
          <Header_content />
        </div>
        <Whatido />
        <Projects
          img={Proj.imgUrl}
          title={Proj.title}
          description={Proj.description}
          atext={Proj.atext}
          link={Proj.link}
        />
        <Projects
          img={Proj1.imgUrl}
          title={Proj1.title}
          description={Proj1.description}
          atext={Proj1.atext}
          link={Proj1.link}
        />
        <Projects
          img={Proj2.imgUrl}
          title={Proj2.title}
          description={Proj2.description}
          atext={Proj2.atext}
          link={Proj2.link}
          buttonText={Proj2.buttonText}
          buttonUrl={Proj2.buttonUrl}
        />
        <Aboutme />
        <Footer />
      </div>
    );
  }
}
export default App;
