import React from 'react'
import githublogo from '../../assets/images/githublogo.png';
import externallink from '../../assets/images/externallink.png';
import { Link } from 'react-router-dom';

export const OtherSingleProject = (props) => {
    return (
        <div>
            <figure>
                <img src={props.projectImage} alt='' />
            </figure>
            <div>
                <div>
                    <h3>Project Name</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                        architecto debitis expedita,
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
                    <Link to="#"><img src={externallink} alt='' /> </Link>
                </div>
            </div>
        </div>
    )
}
