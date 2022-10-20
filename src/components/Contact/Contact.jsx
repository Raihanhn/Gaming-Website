import React from 'react'
import img21 from '../../assets/img/contact.jpg'

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <img src={img21} alt="" />
        <div className="form">
            <h1>Contact Us</h1>
            <div className="inputBx">
                <p>Enter Name</p>
                <input type="text" placeholder='Full Name' />
            </div>
            <div className="inputBx">
                <p>Enter Email</p>
                <input type="text" placeholder='Full Name' />
            </div>
            <div className="inputBx">
                <p>Message</p>
                <textarea placeholder='Type here...'></textarea>
            </div>
            <div className="inputBx">
                <input type="submit" name='Submit' />
            </div>
        </div>
    </div>
  )
}

export default Contact