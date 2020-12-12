import React from 'react';
import Carousal from '../Components/Carousal';
import Typewriter from 'typewriter-effect';
import {NavLink} from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import Cdata from "../DataBase/ChatData";
import { ThemeProvider } from 'styled-components';
import chat_styles from '../Components/ChatStyle';
import bot from '../Images/Icons/bot.svg';

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
                        <div className="chatbot">
                            <ThemeProvider theme={chat_styles}>
                            <ChatBot
                                steps={Cdata}
                                headerTitle={"Testing AI ChatBot"}
                                placeholder="Type away..."
                                customDelay="500"
                                botAvatar={bot}
                                floating="true"
                                width="700px"
                                />
                            </ThemeProvider>
                        </div>
        </div>
    )
}

export default Home;