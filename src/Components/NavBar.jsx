import React from 'react';
import logo from '../logo.svg';
import {NavLink} from 'react-router-dom';

const NavBar=()=>{
    return(
        <div >
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink exact className="navbar-brand" to="/">
                                    <img src={logo} height="30" width="30" alt=" ..." loading="lazy" className="logo" />
                                    <b className="navbar-brand-title">Subrata</b>
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <NavLink exact className="nav-link " aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/skills">Skills</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </nav>
        </div>
    )
}

export default NavBar;