import React, { useEffect, useState } from 'react';
import './HNY.css';
import Smoke from '../Images/BackVideo/smoke.mp4';
import Slider from 'react-animated-slider';
import '../../node_modules/react-animated-slider/build/horizontal.css';
import db from '../DataBase/Database';




const HNY=()=>{
    const [Arr,setArr]=useState({
        items:[]
    });
    const Data =()=>{
        db.ref('/HNYWishes/').on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            setArr({ items });
          });
    }
    useEffect(() => {
        Data();
      } ,[]);
    return(
        <div>
            <section>
                <video src={Smoke} autoPlay muted></video>
                <h1>
                    <span>H</span>
                    <span>A</span>
                    <span>P</span>
                    <span>P</span>
                    <span>Y</span>
                    <span>N</span>
                    <span>E</span>
                    <span>W</span>
                    <span>Y</span>
                    <span>E</span>
                    <span>A</span>
                    <span>R</span>
                    <span>2</span>
                    <span>0</span>
                    <span>2</span>
                    <span>1</span>
                </h1>
            </section>
            <div className="wish-sec">
            <Slider autoplay={3000}>
                {Arr.items.map((item, index) => (
                    <div
                        key={index}
                        className=""
                    >
                        <div className="slide">
                            {/* <h2 className="m-3">Wishes for 2021</h2> */}
                            <div className="wish-content col-6 mx-auto m-5">{item.wish}</div>
                            <span className='auth'>
                                Post by<br/>
                               <strong>{item.author}</strong> 
                            </span>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    )
}


export default HNY;