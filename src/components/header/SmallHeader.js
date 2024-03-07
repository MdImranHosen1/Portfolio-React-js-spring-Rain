import React, { useState } from 'react';
import './smallHeader.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/house.png';
import menu from '../../assets/images/menu.png';
import close from '../../assets/images/delete-cross.png';

export const SmallHeader = () => {
    const [show, setShow] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setShow(false); // Hide the menu after clicking on a link
        }
    };

    function handleClickMenu() {
        setShow(!show); // Toggle show state
    }

    return (
        <>
            <header style={{ paddingRight: "5px", paddingLeft: "5px" }} id="flex-container-head-large" className="navbar-style">
                <div>
                    <Link to="Portfolio-React-js-spring-Rain/">
                        <img height="30px" src={logo} alt="Homepage" />
                    </Link>
                </div>
                <div>
                    <Link onClick={handleClickMenu}>
                        <img height="30px" src={show ? close : menu} alt="Menu" />
                    </Link>
                </div>
            </header>
            {show && <div className='sm-header'>
                <span onClick={() => scrollToSection("about")}>About</span>
                <span onClick={() => scrollToSection("experience")}>Experience</span>
                <span onClick={() => scrollToSection("project")}>Project</span>
                <span onClick={() => scrollToSection("contact")}>Contact</span>
                <span><Link to="#">Resume</Link></span>
                <span><Link to="#">Hire me</Link></span>
            </div>}
        </>
    );
};
