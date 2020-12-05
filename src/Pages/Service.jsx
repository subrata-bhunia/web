import React from 'react';
import {NavLink} from 'react-router-dom';

const Service=()=>{
    return(
        <div>
             <div className="text-center service_div">
                <b >Our Services</b>
            </div>
        <div className="service">
            <div className="container_service mx-auto">
                <div className="box">
                    <div className="content_service">
                        <h2>01</h2>
                        <h3>Service One</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of tldus PageMaker including versions odus PageMaker including versions ofdus PageMaker including versions o Lorem Ipsum.
                        </p>
                        <NavLink exact to="/error" className="btn">
                            Read More 
                        </NavLink>
                    </div>
                </div>
                <div className="box">
                    <div className="content_service">
                        <h2>02</h2>
                        <h3>Service Two</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of tldus PageMaker including versions odus PageMaker including versions ofdus PageMaker including versions o Lorem Ipsum.
                        </p>
                        <NavLink  exact to="/error" className="btn">
                            Read More 
                        </NavLink>
                    </div>
                </div>
                <div className="box">
                    <div className="content_service">
                        <h2>03</h2>
                        <h3>Service Three</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of tldus PageMaker including versions odus PageMaker including versions ofdus PageMaker including versions o Lorem Ipsum.
                        </p>
                        <NavLink exact to="/error" className="btn">
                            Read More 
                        </NavLink>
                    </div>
                </div>
                <div className="box">
                    <div className="content_service">
                        <h2>04</h2>
                        <h3>Service Four</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of tldus PageMaker including versions odus PageMaker including versions ofdus PageMaker including versions o Lorem Ipsum.
                        </p>
                        <NavLink exact to="/error" className="btn">
                            Read More 
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Service;