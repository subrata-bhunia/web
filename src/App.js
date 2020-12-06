import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//Components//
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
// Pages //
import Home from './Pages/Home';
import Skill from './Pages/Skills';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';



function App() {
  return (
    <div className="">
      <NavBar />
      <div className="main_div">
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skill} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route  exact path="/error" component={ErrorPage} />
        <Redirect to="/error" />
      </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
