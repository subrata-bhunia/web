import React from 'react';
import {Helmet} from 'react-helmet';
import Carousal from '../Components/Carousal';
import Typewriter from 'typewriter-effect';
import {NavLink} from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import Cdata from "../DataBase/ChatData";
import { ThemeProvider } from 'styled-components';
import chat_styles from '../Components/ChatStyle';
//Chatbot Avatar
import bot from '../Images/Icons/bot.svg';
import user from '../Images/Icons/user.svg';
// import HNY from '../Components/HNY';
//


const Home=()=>{
    return(
        <div className="">
            <Helmet>
                <title>
                    Subrata | Web & App Devloper | UI & UX Designer
                </title>
            </Helmet>
            {/* <div>
                <HNY />
            </div> */}
            {/* Just for Happy new year Event */}
            {/* <div className="climacell-widget home-widget" data-apikey="4EEXliJwhnMP3dJ8EB9nKfA6vnFAJnZp" data-type="nowcast" data-location-name="Debpur, West Bengal 721156, India" data-location-lon="87.568131928545" data-location-lat="22.512938549785886" data-size-mode="small" data-font-color="#000" data-background-color="transparent" data-background-opcity="0.5" data-font-family="times new roman" data-weather-params="temp:C,precipitation:mm/hr" data-precipitation-timeline="true" data-allow-users-enter-address="true" ></div> */}
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
                    headerTitle={"Testing AI ChatBot by SB"}
                    placeholder="Type away..."
                    customDelay="500"
                    botAvatar={bot}
                    userAvatar={user}
                    floating="true"
                    // width="700px"
                    />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Home;