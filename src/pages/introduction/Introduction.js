import React from 'react'
import down from './../../assets/images/downarrow.png'
import './introduction.css'
import { Link } from 'react-router-dom'

export const Introduction = () => {
  return (
    <div className="introduction-style">
      <div id="introduction-name-style">Hi, I'm Imran Hosen</div>
      <div>
        Self-motivated person with analytical thinking and problem-solving
        skills. Always ready to step out of the comfort zone to take complex
        challenges and learn new technologies.
      </div>
      <div id="introduction-logo-style">
        <Link to="/about"><img src={down} alt='' /></Link>
      </div>
    </div>

  )
}
