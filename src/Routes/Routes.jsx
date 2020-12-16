import React from 'react';
import {Route, Switch } from 'react-router-dom';
//Bootstarp//
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
//Components//
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
// Pages //
import Home from '../Pages/Home';
import Skill from '../Pages/Skills';
import Service from '../Pages/Service';
import Contact from '../Pages/Contact';
import ErrorPage from '../Pages/ErrorPage';
//Admin-pages//



function Routes() {
  return (
    <div className="body">
      <NavBar />
      <div className="main_div">
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skill} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route  exact path="/error" component={ErrorPage} />
      </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default Routes;
