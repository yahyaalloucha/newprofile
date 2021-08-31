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
import Contact from "./Contact/Contact";
import { SuperSEO } from "react-super-seo";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CONTEX from "./CONTEX/CONTEX";

class App extends Component {
  state = {
    theme: "light",
  };
  onChangeTheme = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark",
    });
  };
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
      linke: "https://gracious-jepsen-0f8026.netlify.app/",
    };

    const Proj2 = {
      imgUrl: Landi,
      title: "Landie",
      description:
        "Landie it's a website to buy a product, I worked on this project with technologies react js, react-bootstrap, and Figma.",
      atext: "Visit Landie",
      linke: "https://flamboyant-almeida-af0295.netlify.app/",
      buttonText: "go to mygithub",
      buttonUrl: "https://github.com/yahyaalloucha/",
    };
    return (
      <Router>
        <div
          className="container-app"
          style={{
            backgroundColor: this.state.theme === "dark" ? "black" : "white",
          }}
        >
          <SuperSEO
  title="Home"
  description="Welcome to my portfolio"
  lang="en"
  openGraph={{
    ogImage: {
      ogImage: "http://placekitten.com/1200/630",
      ogImageAlt: "Kittens",
      ogImageWidth: 1200,
      ogImageHeight: 630,
      
    },
  }}
  twitter={{
    twitterSummaryCard: {
      summaryCardImage: "http://placekitten.com/1200/630",
      summaryCardImageAlt: "Kittens",
      summaryCardSiteUsername: "justinmahar",
    },
  }}
/>
          <CONTEX.Provider
            value={{
              theme: this.state.theme,
              onChangeTheme: this.onChangeTheme,
            }}
          >
            <switch>
              <Route exact path="/">
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
                  link={Proj.linke}
                />
                <Projects
                  img={Proj1.imgUrl}
                  title={Proj1.title}
                  description={Proj1.description}
                  atext={Proj1.atext}
                  link={Proj1.linke}
                />
                <Projects
                  img={Proj2.imgUrl}
                  title={Proj2.title}
                  description={Proj2.description}
                  atext={Proj2.atext}
                  link={Proj2.linke}
                  buttonText={Proj2.buttonText}
                  buttonUrl={Proj2.buttonUrl}
                />

                <Aboutme />

                <Footer />
              </Route>
              <Switch>
                <Route exact path="/Contact">
                  <Contact />
                </Route>
              </Switch>

            </switch>
          </CONTEX.Provider>
        </div>
      </Router>
    );
  }
}
export default App;
