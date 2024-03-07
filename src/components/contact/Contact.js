import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './contact.css'
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
      {show&& <form className="contact-write-messege-form">
        <label>Messege</label>
        <textarea
          placeholder="Your message."
          id="contact-send-messege"
          required
        ></textarea>
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email."
          id="contact-send-email"
          required
        />
        <label>Country</label>
        <select required id="contact-send-country">
          <option>Bangladesh</option>
          <option>India</option>
          <option>Pakistan</option>
          <option>Japan</option>
          <option>Nepal</option>
        </select>
      </form>}

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
        ><img src="./images/githublogo.png" alt=''/>
      </Link>
      <Link
        href="https://www.linkedin.com/in/md-imran-hosen19/"
        target="_blank"
        rel="noopener"
        ><img src="./images/linkedin.png" alt=''/>
      </Link>
    </div>
    <p>Imran Hosen - 2023</p>
  </div>
  )
}
