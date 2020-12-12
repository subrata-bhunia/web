import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Slide1 from '../Images/Carousel/slide1.jpg';
import Slide2 from '../Images/Carousel/slide2.jpg';
import Slide3 from '../Images/Carousel/slide3.jpg';
import Slide4 from '../Images/Carousel/slide4.jpg';

const  Carousal=()=>{
    return(
        <div className="mb-3">
            <Carousel  slide={false} fade={true} controls={false} indicators interval={50000} pause={false} >
                <Carousel.Item className="aa">
                    {/* <img src="https://source.unsplash.com/daily?php"  alt="......" className=" d-block custom-img"  /> */}
                    <img src={Slide1}  alt="......" className=" d-block custom-img"  />
                </Carousel.Item>
                <Carousel.Item className="aa">
                <img src={Slide1}  alt="......" className=" d-block custom-img"  />
                    {/* <img src={"https://source.unsplash.com/daily?web-design"}  alt="......" className=" d-block  custom-img"  /> */}
                </Carousel.Item>
                <Carousel.Item className="aa">
                <img src={Slide1}  alt="......" className=" d-block custom-img"  />
                    {/* <img src={"https://source.unsplash.com/daily?webdesign"}  alt="......" className=" d-block  custom-img"  /> */}
                </Carousel.Item>
                <Carousel.Item className="aa">
                <img src={Slide1}  alt="......" className=" d-block custom-img"  />
                    {/* <img src={"https://source.unsplash.com/daily?hacking"}  alt="......" className=" d-block custom-img"  /> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default Carousal;