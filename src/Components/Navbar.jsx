import React  from "react";
import './Navbar.css'
/*
  Author: Atul Pratap Singh
  Date: 29/Nov/2022
  Version: 1.0.0
*/
const Navbar=()=>{
    return(
        <div className="wrapper">
            <div className="leftSide">
                <div className="nameAuthor">Atul Pratap Singh</div>
                <span>Toggle</span>
            </div>
            <div className="rightSide">
                <div className="rightList">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <button className="contactUs">
                    Contact Us
                </button>
            </div>
        </div>
    )
}
export default Navbar;