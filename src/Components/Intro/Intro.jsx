import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

const Intro = () => {
  return (
     <div className="Intro">
        <div className="leftIntro">
        <div className="introName">
        <span>Hy! I Am</span>
            <span>Atul Pratap Singh</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Praesentium, laudantium.</span>
        </div>
            
        
        <button className="introButton btn">Hire Me</button>
        <div className="introIcons">
        <a href="https://github.com/thakuratul2">
        <img src={Github} alt="github" />
        </a>
           <a href="">
           <img src={Linkedin} alt="linkedin" />
           </a>
            <a href="https://www.instagram.com/thakuratul_28/">
            <img src={Instagram} alt="instgram" />
            </a>
            

        </div>
        </div>
        <div className="rightIntro">
                I am right Side
        </div>
     </div>
  )
}

export default Intro