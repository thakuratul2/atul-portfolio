import React from 'react'
import './FloatingImg.css'

const FloatingImg = ({image,txt1,txt2}) => {
  return (
    <div className="floatingImg">
           <img src={image} alt=""/>
           <span>
            {txt1}
            <br/>
            {txt2}
           </span>

    </div>
  )
}

export default FloatingImg