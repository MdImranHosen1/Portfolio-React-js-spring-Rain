import React from 'react'
const country=['Bangladesh','India','Pakistan','Japan','Nepal'];

export const ContactMe = () => {
    return (
        <div><form className="contact-write-messege-form">
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
                {country.map((val)=>{
                    return <option>{val}</option>
                })}
            </select>
        </form></div>
    )
}
