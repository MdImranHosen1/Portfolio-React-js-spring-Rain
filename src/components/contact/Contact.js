import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './contact.css'
import { ContactMe } from './ContactMe';
import github from '../../assets/images/githublogo.png'
import linkedin from '../../assets/images/linkedin.png'

export const Contact = () => {

  const [show, setShow] = useState(false);

  function toggleWriteMessage() {

  
      if (show) {
          setShow(false);
      }
      else {
          setShow(true);
      }
  }
  return (
    <div id="contact" className="contact-style">
    <div><h1>Contact</h1></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, error,
      corrupti sapiente voluptatem provident doloribus rerum voluptatibus, ad
      quia quidem unde et id tempora aspernatur! Totam commodi obcaecati atque
      suscipit.
    </p>
    <div Style="margin-top: 30px; margin-bottom: 60px">
      {show&& <ContactMe/>}

      <span
        onClick={toggleWriteMessage}
        className="write-messege-button-style"
        ><a href="#contact" id="contact-write-message">{show?"Send message":"Write message"}</a></span
      >
    </div>
    <div Style="margin: 10px">
      <Link
        href="https://github.com/MdImranHosen1"
        target="_blank"
        rel="noopener"
        ><img src={github} alt=''/>
      </Link>
      <Link
        href="https://www.linkedin.com/in/md-imran-hosen19/"
        target="_blank"
        rel="noopener"
        ><img src={linkedin} alt=''/>
      </Link>
    </div>
    <p>Imran Hosen - 2023</p>
  </div>
  )
}
