import React, { useState } from 'react'
import './about.css'
import myself from './../../assets/images/imran.jpg'
import viewmore from './../../assets/images/viewmore.png'
import viewless from './../../assets/images/viewless.png'

export const About = () => {

  const [show,setShow]=useState(false);

 
  function handleClickAboutMore() {   

    if (show) {
      setShow(false);
    }
    else {
      setShow(true);
     
    }
  }

  return (
    <div id="about" className="about-main-div">
      <div><h1>About Me</h1></div>
      <div className="flex-container-about">
        <article>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            excepturi nesciunt eligendi deleniti vero voluptatibus consequatur
            ad quaerat officiis eos facilis, libero, incidunt nobis fuga
            repudiandae sunt! Dolorem, iure odit!
          </p>
          {show && (<div id="about_more_div" ><br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              excepturi nesciunt eligendi deleniti vero voluptatibus consequatur
              ad quaerat officiis eos facilis, libero, incidunt nobis fuga
              repudiandae sunt! Dolorem, iure odit!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              excepturi nesciunt eligendi deleniti vero voluptatibus consequatur
              ad quaerat officiis eos facilis, libero, incidunt nobis fuga
              repudiandae sunt! Dolorem, iure odit!
            </p>
          </div>)}
          <div Style="margin-top:10px; display: flex ; justify-content: center;">
            <img id="about_more_button_img" Style=" cursor: pointer; opacity: 80%;" onClick={handleClickAboutMore} width="30px" src={show?viewless:viewmore} alt='' />
          </div>
        </article>
        <figure>
          <img src={myself} alt='' />
        </figure>
      </div>
    </div>
  )
}
