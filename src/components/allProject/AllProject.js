import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { OtherSingleProject } from './OtherProjectSingle';
import './project.css'
// images
import firstproject from '../../assets/images/firstproject.jpg'
import secondproject from '../../assets/images/secondproject.jpg'
import githublogo from '../../assets/images/githublogo.png';
import externallink from '../../assets/images/externallink.png';
import instagram from '../../assets/images/instagram.png';
import maps from '../../assets/images/maps.png';
import calculator from '../../assets/images/calculator.png';
import videocallingapp from '../../assets/images/videocallingapp.png';
import viewmore from '../../assets/images/viewmore.png';
import viewless from '../../assets/images/viewless.png'
// images




export const AllProject = () => {

    const [show, setShow] = useState(false);

    function toggleMoreProject() {

        console.log("asdfadsf");
        if (show) {
            setShow(false);
        }
        else {
            setShow(true);
        }
    }
    return (
        <div id="project" className="project-style">
            {/* <!-- Featured Project start --> */}
            <div className="freatured-project-style">
                <div><h1>Featured Project</h1></div>
                <section className="flex-container-project">
                    <figure>
                        <img src={firstproject} alt='' />
                    </figure>
                    <div className="features-project-text">
                        <div>
                            <h3>Project Name</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                                architecto debitis expedita, necessitatibus nulla tempore
                                officia sed placeat minima earum temporibus magni.
                            </p>
                            <hr />
                            <div>
                                <span>Html</span>
                                <span>CSS</span>
                                <span>JS</span>
                                <span>CSS</span>
                                <span>JS</span>
                            </div>
                        </div>
                        <div>
                            <img src={githublogo} alt='' />
                            <Link href="#"><img src={externallink} alt='' /> </Link>
                        </div>
                    </div>
                </section>
                <section className="flex-container-project" Style="text-align: right">
                    <div className="features-project-text">
                        <div>
                            <h3>Project Name</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                                architecto debitis expedita, necessitatibus nulla tempore
                                officia sed placeat minima earum temporibus magni.
                            </p>
                            <hr />
                            <div>
                                <span>Html</span>
                                <span>CSS</span>
                                <span>JS</span>
                                <span>CSS</span>
                                <span>JS</span>
                            </div>
                        </div>
                        <div>
                            <img src={githublogo} alt='' />
                            <Link href="#"><img src={externallink} alt='' /> </Link>
                        </div>
                    </div>
                    <figure>
                        <img src={secondproject} alt='' />
                    </figure>
                </section>
            </div>
            {/* <!-- Featured Project end --> */}

            {/* <!-- Other Project start --> */}
            {show && <div >
                <div><h1>Other Project</h1></div>

                <div className="flex-container-other-project" alt=''>
                    <div Style="margin-right: 10px">
                        <OtherSingleProject projectImage={instagram} />
                        <OtherSingleProject projectImage={maps} />
                    </div>
                    <div>
                        <OtherSingleProject projectImage={calculator} />
                        <OtherSingleProject projectImage={videocallingapp} />
                    </div>
                </div>
            </div>}
            <div id="project-viewmore-button">
                <span onClick={toggleMoreProject}>
                    <img id="other-project-seemore-img" src={show?viewless:viewmore} alt='' />
                    <div id="other-project-seemore-text">{show?"See less":"See more"}</div></span
                >
            </div>
            {/* <!-- Other Project end --> */}
        </div>
    )
}
