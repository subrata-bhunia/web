import React from 'react';
import logo from '../logo.svg';
import {NavLink} from 'react-router-dom';
import menu from '../Images/Icons/menu.svg';
import x from '../Images/Icons/X.svg';

const top = {backgroundColor: 'rgba(255,255,255,1)'}
const scrolled = {backgroundColor: 'rgba(0,0,0,0.7)'}
const top1={color:'rgba(0,0,0,0.7)',fill:'rgba(0,0,0,0.7)'}
const scrolled1={color:'rgba(255,255,255,1)',fill:'rgba(255,255,255,1)'}

class NavBar extends React.Component{
    constructor() {
        super();
        this.state = {
          style: top,
          nav:top1,
          iconClassName:menu
        };
    
        this.handleScroll = this.handleScroll.bind(this);
        this.IconChange = this.IconChange.bind(this);
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = e => {
    
        if (window.scrollY < 100) {
          this.setState({style: top,nav:top1})
        } else if (window.scrollY > 100) {
          this.setState({style: scrolled,nav:scrolled1})
        }
      }
      IconChange=()=>{
        if (this.state.iconClassName===menu) {
          this.setState({iconClassName:x})
        } else if (this.state.iconClassName===x) {
          this.setState({iconClassName:menu}) 
        }else{
          this.setState({iconClassName:menu})
        }
      }
      

    render(){
    return(
        <div >
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" onScroll={this.handleScroll} style={this.state.style}>
              <div className="container-fluid">
                  <NavLink exact className="navbar-brand" to="/">
                      <img src={logo} height="30" width="30" alt=" ..." loading="lazy" className="brand-logo" />
                      <b className="navbar-brand-title">Subrata</b>
                  </NavLink>
                  <button onClick={this.IconChange} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <img src={this.state.iconClassName} alt="menu_icon" style={this.state.nav} height="30px" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                      <NavLink exact style={this.state.nav} activeClassName="active-menu" className="nav-link " aria-current="page" to="/">Home</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink exact style={this.state.nav} activeClassName="active-menu" className="nav-link" to="/services">Services</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink exact style={this.state.nav} activeClassName="active-menu" className="nav-link" to="/skills">Skills</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink exact style={this.state.nav} activeClassName="active-menu" className="nav-link" to="/contact">News</NavLink>
                      </li>
                  </ul>
                  </div>
              </div>
          </nav>
        </div>
    )
}
}

export default NavBar;