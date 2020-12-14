import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//Admin-pages//
import Admin from './Pages/Admin/Admin';
//HomePages//
import Routes from './Routes/Routes';



function App() {
  return (
    <div className="body">
      <div className="main_div">
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <Routes/>
          </Route>
          <Route exact path="/services">
            <Routes/>
          </Route>
          <Route exact path="/skills">
            <Routes/>
          </Route>
          <Route exact path="/contact">
            <Routes/>
          </Route>
          <Route exact path="/error">
            <Routes/>
          </Route>
          {/* Admin */}
          <Route exact path="/admin">
            <Admin/>
          </Route>
          <Route exact path="/adminpanel">
            <Admin/>
          </Route>
          {/* Error */}
          <Redirect to="/error" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
