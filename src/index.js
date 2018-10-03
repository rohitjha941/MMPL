import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Pages/home"
import About from "./Pages/about"
import Gallary from "./Pages/gallary"
import Facility from "./Pages/facilities"
import Research from "./Pages/research"
import Events from "./Pages/events"
import Phd from "./Pages/phd"
import Contact from "./Pages/contact"
import Header from "./PageComponent/header"
import Footer from "./PageComponent/footer"
import Faculty  from "./Pages/faculty"
import Patents  from "./Pages/patents"
import Project  from "./Pages/project"

import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
 







import "./index.css"
class Test extends React.Component{
    render(){
        return (
               <Router>
                   <div>
                    <Header />
                    <div className = "main"> 
                        <Switch> 
                            <Route path = "/" component = {Home} exact  />
                            <Route path = "/about" component = {About} />
                            <Route path = "/facilities" component = {Facility} />
                            <Route path = "/gallary" component = {Gallary} />
                            <Route path = "/events" component = {Events} />
                            <Route path = "/contact" component = {Contact} />
                            <Route path = "/projects" component = {Project} />
                            <Route path = "/patents" component = {Patents} />
                            <Route path = "/faculty" component = {Faculty} />
                            <Route path = "/phd" component = {Phd} />
                        </Switch>
                        </div>
                    <Footer />
                    </div>
               </Router>
        );
    }
}


const appp = document.getElementById('root');
ReactDOM.render(<Test/> , appp);
