import React from 'react';
import {NavLink} from 'react-router-dom';
import Sdata from '../DataBase/ServiceData';
// import Logo from '../logo.svg'
import {Helmet} from 'react-helmet';


const Service=()=>{
    return(
        <div>
            <Helmet>
              <title>Subrata | Services</title>
          </Helmet>
             <div className="text-center service_div">
                <b >Services</b>
            </div>
        <div className="service">
            <div className="container_service">
                    {
                        Sdata.map((val,ind)=>{
                            return(
                                <div className="box" key={ind}>
                                    <div className="content_service">
                                    {/* <img src={Logo} height="30" width="30" alt=" ..." className="logo" /> */}
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