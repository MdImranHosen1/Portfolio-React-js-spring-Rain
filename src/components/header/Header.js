import { Link } from 'react-router-dom'
import logo from '../../assets/images/house.png'
import './header.css'
import { SmallHeader } from './SmallHeader';
import { useState, useEffect } from 'react';


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



    return (
        <>
            {smallNav && <SmallHeader />}
            {!smallNav && (
                <header id="flex-container-head-large" className="navbar-style">
                    <div>
                        <Link to="/">
                            <img height="30px" src={logo} alt="Homepage" />
                        </Link>
                    </div>

                    <ul className="flex-container">
                        <li className="nav-item">
                            <Link to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/experience'>Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/project'>Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/recommended'>Recommended</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact'>Contact</Link>
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

        </>
    );
};

