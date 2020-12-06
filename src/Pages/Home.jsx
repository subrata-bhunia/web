import React from 'react';
import Carousal from '../Components/Carousal';
import Typewriter from 'typewriter-effect';
import {NavLink} from 'react-router-dom';

const Home=()=>{
    return(
        <div className="home">
            <div>
            <Carousal />
            </div>
                        <div className="title-massage">
                            <h1 className="text-center heading mb-3">
                                Hi, I am 
                                <br/>
                                <strong>
                                    Subrata Bhunia
                                </strong>
                            </h1>
                            <div className="sub-title">
                                <Typewriter 
                                  options={{
                                      strings: ["Web & App Developer", "Learner" , "UI & UX Design"] ,
                                      autoStart:true,
                                      loop:true,
                                      delay:50
                                  }}
                                />
                            </div>
                            <div className="home-button btn">
                                <NavLink exact to="/services">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                   Get Started
                                </NavLink>
                            </div>
                        </div>
        </div>
    )
}

export default Home;