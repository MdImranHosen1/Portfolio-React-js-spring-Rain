import React, { useState } from 'react';
import './smallHeader.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/house.png';
import menu from '../../assets/images/menu.png';
import close from '../../assets/images/delete-cross.png';

export const SmallHeader = () => {
    const [show, setShow] = useState(false);


    function handleClickMenu() {
        setShow(!show); // Toggle show state
    }

    return (
        <>
            <header style={{ paddingRight: "5px", paddingLeft: "5px" }} id="flex-container-head-large" className="navbar-style">
                <div>
                    <Link to="/Portfolio-React-js-spring-Rain">
                        <img height="30px" src={logo} alt="Homepage" />
                    </Link>
                </div>

                <div style={{ display: "flex" }}>
                    <div className="navbar-2nd-div" style={{ marginRight: "10px" }}>
                        <div className="flex-container navbar-2nd-div-1st-div">
                            <span className="button-style"><Link to="#">Resume</Link></span>
                            <span className="button-style"><Link to="#">Hire Me</Link></span>
                        </div>
                    </div>
                    <Link onClick={handleClickMenu}>
                        <img height="30px" src={show ? close : menu} alt="Menu" />
                    </Link>
                </div>
            </header>
            {show && <div className='sm-header'>
                <span ><Link onClick={handleClickMenu} to='about'>About</Link></span>
                <span ><Link onClick={handleClickMenu} to='experience'>Experience</Link></span>
                <span ><Link onClick={handleClickMenu} to='project'>Project</Link></span>
                <span ><Link onClick={handleClickMenu} to='fetchQuote'>FetchQuote</Link></span>
                <span ><Link onClick={handleClickMenu} to='contact'>Contact</Link></span>


            </div>}
        </>
    );
};
