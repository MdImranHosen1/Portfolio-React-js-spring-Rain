import React from 'react'
import { Introduction } from './../introduction/Introduction';
import { About } from './../about/About';
import { AllProject } from './../allProject/AllProject';
import { Experience } from './../experience/Experience';
import { Contact } from './../contact/Contact';
import { Recommend } from './../recommendation/Recommend';

export const Homepage = () => {
    return (
        <div>
            <Introduction id="introduction" />
            <About id="about" />
            <Experience id="experience" />
            <AllProject id="project" /> 
            <Recommend id="recommendation"/>
            <Contact id="contact" />
        </div>
    )
}
