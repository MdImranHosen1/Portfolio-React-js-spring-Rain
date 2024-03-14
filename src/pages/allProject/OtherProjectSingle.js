import React from 'react'
import githublogo from '../../assets/images/githublogo.png';
import externallink from '../../assets/images/externallink.png';
import { Link } from 'react-router-dom';
import './project.css'
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
                      {props.skills.map(value => {
                                    return <span>{value} </span>
                                })}
                    </div>
                </div>
                <div>
                <img src={githublogo} alt='' style={{marginRight: '5px'}} />
                    <Link to="#"><img src={externallink} alt='' /> </Link>
                </div>
            </div>
        </div>
    )
}
