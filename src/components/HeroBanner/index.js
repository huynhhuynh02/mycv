import React, {useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import heroimage from '../../assets/images/image_07.jpeg';
import './HeroBanner.scss';
function HeroBanner() {
    return (
        <div className="Hero-Banner" style={{backgroundImage:`url(${heroimage})`}}>
            <div className="title">
                <h2 className="hero-title glitch" data-text="I'M HUYNH">I'M HUYNH</h2>
                <ReactTypingEffect 
                    speed="100"
                    eraseSpeed="50"
                    eraseDelay="2000"
                    typingDelay="1000"
                    text={["Hello world,My name is Huynh Thanh Huynh", "I from to Quang Nam Province, VietNam" ,"Software Engineer and Web Developer freelancer"]}
                />
            </div>
        </div>
    );
}
export default HeroBanner;