import React, { useState } from 'react'
import './smallHeader.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/house.png'
import menu from '../../assets/images/menu.png'
import close from '../../assets/images/delete-cross.png'

export const SmallHeader = () => {

    const [show,setShow]=useState(false);

 
    function handleClickMenu() {   
  
      if (show) {
        setShow(false);
      }
      else {
        setShow(true);
       
      }
    }
    return (
        <>
            <header style={{ paddingRight:"5px",paddingLeft:"5px"}} id="flex-container-head-large" className="navbar-style">
                <div>
                    <Link to="index.html">
                        <img height="30px" src={logo} alt="Homepage" />
                    </Link>
                </div>
                <div>
                    <Link onClick={handleClickMenu}>
                        <img height="30px" src={show?close:menu} alt="Menu" />
                    </Link>
                </div>
            </header>
        {show && <div className='sm-header'>

            <span>About</span>
            <span>Experience</span>
            <span>Project</span>
            <span>Contact</span>
            <span>Resume</span>
            <span>Hire me</span>

        </div>}
        </>

    )
}
