import React from 'react';
import {NavLink} from 'react-router-dom';
import Sdata from '../DataBase/ServiceData';
import Logo from '../logo.svg'



const Service=()=>{
    return(
        <div>
             <div className="text-center service_div">
                <b >Services</b>
            </div>
        <div className="service">
            <div className="container_service mx-auto">
                    {
                        Sdata.map((val,ind)=>{
                            return(
                                <div className="box" key={ind}>
                                    <div className="content_service">
                                    <img src={Logo} height="30" width="30" alt=" ..." className="logo" />
                                        <h2>
                                            {ind-ind}{ind+1}
                                        </h2>
                                        <h3>
                                            {val.title}
                                        </h3>
                                        <p>
                                        {val.about}
                                        </p>
                                        <NavLink exact to={val.visit} className="btn btn-text'">
                                            <div className="btn-text">Read More</div>
                                        </NavLink>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
        </div>
    )
}

export default Service;