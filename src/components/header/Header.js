import { Link } from 'react-router-dom'
import logo from '../../assets/images/house.png'
import './header.css'
import { SmallHeader } from './SmallHeader';
import { useState, useEffect } from 'react';
import { Introduction } from './../introduction/Introduction';
import { About } from './../about/About';
import { AllProject } from './../allProject/AllProject';
import { Experience } from './../experience/Experience';
import { Contact } from './../contact/Contact';


// export const Header = () => {

//   const [smallNav, setSmallNav] = useState(false);


//   const handleResize = () => {
//     const w = window.innerWidth;

//     if (w < 700) {
//       setSmallNav(true);
//     }
//     else {
//       setSmallNav(false);
//     }
//   };

//   window.addEventListener('resize', handleResize);


//   return (
//     <>
//       {smallNav && <SmallHeader></SmallHeader>}
//       {!smallNav && <header id="flex-container-head-large" className="navbar-style" >
//         <div>
//           <Link to="index.html">
//             <img height="30px" src={logo} alt="Homepage" />
//           </Link>
//         </div>

//         <ul className="flex-container">
//         <li className="nav-item">
//   <Link to="#about" title="about">About</Link>
// </li>
// <li className="nav-item">
//   <Link to="#experience" title="experience">Experience</Link>
// </li>
// <li className="nav-item">
//   <Link to="#project" title="project">Project</Link>
// </li>
// <li className="nav-item">
//   <Link to="#contact" title="contact">Contact</Link>
// </li>
//           {/* <li className="nav-item">
//             <Link to="#about" title="about">About</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="#experience" title="experience">Experience</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="#project" title="project">Project</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="#contact" title="contact">Contact</Link>
//           </li> */}
//         </ul>

//         <div className="navbar-2nd-div">
//           <div className="flex-container navbar-2nd-div-1st-div">
//             <span className="button-style"><Link to="#">Resume</Link></span>
//             <span className="button-style"><Link to="#">Hire Me</Link></span>
//           </div>

//         </div>
//       </header>}


//       <Introduction id="introduction"></Introduction>
// <About id="about"></About>
// <Experience id="experience" />
// <AllProject id="project" />
// <Contact id="contact" />
//     </>
//   )
// }


export const Header = () => {
    const [smallNav, setSmallNav] = useState(false);

    const handleResize = () => {
        const w = window.innerWidth;
        setSmallNav(w < 700);
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
                        <Link to="index.html">
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

            <Introduction id="introduction" />
            <About id="about" />
            <Experience id="experience" />
            <AllProject id="project" />
            <Contact id="contact" />
        </>
    );
};

