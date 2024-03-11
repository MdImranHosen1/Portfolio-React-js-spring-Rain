import { Link } from 'react-router-dom'
import logo from '../../assets/images/house.png'
import './header.css'
import { SmallHeader } from './SmallHeader';
import { useState, useEffect } from 'react';
import { Homepage } from '../homePage/Homepage';


export const Header = () => {
    const [smallNav, setSmallNav] = useState(false);

    const handleResize = () => {
        const w = window.innerWidth;
        setSmallNav(w < 800);
    };

    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {smallNav && <SmallHeader />}
            {!smallNav && (
                <header id="flex-container-head-large" className="navbar-style">
                    <div>
                        <Link to="Portfolio-React-js-spring-Rain/">
                            <img height="30px" src={logo} alt="Homepage" />
                        </Link>
                    </div>

                    <ul className="flex-container">
                        <li className="nav-item">
                            <Link onClick={() => scrollToSection("about")}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => scrollToSection("experience")}>Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => scrollToSection("project")}>Project</Link>
                        </li>
                        <li className="nav-item">
                        <Link onClick={() => scrollToSection("recommendation")}>Recommended</Link> 
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => scrollToSection("contact")}>Contact</Link>
                        </li>
                        
                    </ul>

                    <div className="navbar-2nd-div">
                        <div className="flex-container navbar-2nd-div-1st-div">
                            <span className="button-style"><Link to="#">Resume</Link></span>
                            <span className="button-style"><Link to="#">Hire Me</Link></span>
                        </div>
                    </div>
                </header>
            )}

            <Homepage></Homepage>
        </>
    );
};

