import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Gallary from "./Pages/gallary";
import Facility from "./Pages/facilities";
import Papers from "./Pages/paper";
import Events from "./Pages/events";
import Scroll from "./PageComponent/scrolltotop"
import Header from "./PageComponent/header";
import Footer from "./PageComponent/footer";

import Project from "./Pages/project";
import Patents from "./Pages/patents";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import People from "./Pages/people";
class Test extends React.Component {
  render() {
    return (
      <Router  >
        <Scroll>
          <Header />
          <div className="main">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/facilities" component={Facility} />
              <Route path="/gallery" component={Gallary} />
              <Route path="/events" component={Events} />
              <Route path="/projects" component={Project} />
              <Route path="/patents" component={Patents} />
              <Route path="/papers" component={Papers} />
              <Route path="/people" component={People} />
            </Switch>
          </div>
          <Footer />
        </Scroll>
      </Router>
    );
  }
}

const appp = document.getElementById("root");
ReactDOM.render(<Test />, appp);
