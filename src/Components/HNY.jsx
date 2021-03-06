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
            // console.log(data)
            let items = Object.values(data);
            setArr({ items });
          });
    }
    useEffect(() => {
        Data();
      } ,[]);
    //   console.log(Arr.items)
    return(
        <div>
            <section>
                <video src={Smoke} autoPlay muted></video>
                <h1>
                	<div>
	                    <span>H</span>
	                    <span>A</span>
	                    <span>P</span>
	                    <span>P</span>
	                    <span>Y</span>
                    </div>
                    <div>
	                    <span>N</span>
	                    <span>E</span>
	                    <span>W</span>
                	</div>
                	<div>
	                    <span>Y</span>
	                    <span>E</span>
	                    <span>A</span>
	                    <span>R</span>
                    </div>
                    <div>
	                    <span>2</span>
	                    <span>0</span>
	                    <span>2</span>
	                    <span>1</span>
                	</div>
                </h1>
            </section>
            <div className="wish-sec">
            <Slider autoplay={1000}>
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