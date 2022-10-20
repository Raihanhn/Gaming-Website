import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
        <div className="info">
            <a href="#" className='logo'>Gamers</a>
            <p><AiOutlineCopyright/> 2022 All Right Reserved !</p>
            <ul>
                <li><a href="#"><AiOutlineFacebook/> </a></li>
                <li><a href="#"><AiOutlineInstagram/> </a></li>
                <li><a href="#"><AiOutlineTwitter/> </a></li>
                <li><a href="#"><BsDiscord/> </a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer