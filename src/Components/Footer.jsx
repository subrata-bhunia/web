import React from 'react';

const Footer=()=>{
    return(
        <footer>
            <div className="main-content">
                <div className="left box">
                    <h2>About us</h2>
                    <div className="content">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="social">
                            <a href="https://www.facebook.com/subrata.bhunia.319">
                            <span className="fab fa-facebook-f"></span>
                            </a>
                            <a href="https://twitter.com/contact_subrata">
                            <span className="fab fa-twitter"></span>
                            </a>
                            <a href="https://www.instagram.com/contact_subrata/">
                            <span className="fab fa-instagram"></span>
                            </a>
                            <a href="https://github.com/subrata-bhunia">
                            <span className="fab fa-github"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="center box">
                    <h2>Address</h2>
                    <div className="content">
                    <div className="place">
                        <span className="fas fa-map-marker-alt"></span>
                        <a href="https://www.google.com/maps/place/Debpur+Bright+Future+Club+(B.F.C.)/@22.5063131,87.585555,20.22z/data=!4m5!3m4!1s0x0:0xf3dc11d14d2029ca!8m2!3d22.5062777!4d87.5854511" className="text_contact">Debpur,Debra,WB</a>
                    </div>
                    <div className="place">
                        <span className="fas fa-phone-alt"></span>
                        <a className="text_contact" href="tel:+917318915280">+91-731-891-5280</a>
                    </div>
                    <div className="place">
                        <span className="fas fa-envelope"></span>
                        <a href="mailto:contact.sbhunia@gmail.com" className="text_contact">contact.sbhunia@gmail.com</a>
                    </div>
                    </div>
                </div>
                <div className="right box">
                    <h2>Contact us</h2>
                    <div className="content">
                        <form action="">
                            <div className="email">
                                <div className="text">Email* </div>
                                <input type="email" required />
                            </div>
                            <div className="msg">
                            <div className="text">Massage* </div>
                                <textarea className="msgForm" rows="2" cols="25" required></textarea>
                            </div>
                            <div className="btns">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className="bottom">
                    <center>
                        <span className="credit">Created By - <a href="/">Subrata Bhunia </a>| </span>
                        <span className="far fa-copyright"></span><span>2020 All rights reserved.</span>
                    </center>
                </div>
        </footer>
    )
}

export default Footer;