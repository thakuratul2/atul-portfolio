import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassimoji from '../../img/glassesimoji.png'
import FloatingImg from '../FLoatingImg/FloatingImg';


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
                <img src={Vector1} alt="vector1"/>
                  <img src={Vector2} alt="vector2"/>
                  <img src={boy} alt="boy"/>
                  <div style={{top: '-4%', left:'68%'}}>
                     <FloatingImg image={Crown} txt1='Web' txt2='Developer'/>
                  </div>
        </div>
     </div>
  )
}

export default Intro