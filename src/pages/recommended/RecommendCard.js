import React from 'react'
import { Link } from 'react-router-dom'

import "https://kit.fontawesome.com/66aa7c98b3.js"


export const RecommendCard = ({user}) => {
  return (
    <div className="card">
      <div className="img-bx">
        <img src={user.image} alt="img" />
      </div>
      <div className="content">
        <div className="detail">
          <h2>{user.firstName}<br /><span>{user.company.title.slice(0,15)}</span></h2>
          <ul className="sci">
            <li>
              <Link to="#"><i className="fab fa-facebook-f"></i></Link>
            </li>
            <li>
              <Link to="#"><i className="fab fa-twitter"></i></Link>
            </li>
            <li>
              <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
            </li>
            <li>
              <Link to="#"><i className="fab fa-instagram"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
