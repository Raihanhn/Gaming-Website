import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Header = () => {

  return (
    <div className="header">
        <a href="#" className='logo'>Gamers</a>
        <ul className="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#games">Games</a></li>
            <li><a href="#tournament">Tournament</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="action">
            <div className="searchBx">
                <a href="#"> <BsSearch className='search'/> </a> 
                <input type="text" placeholder='Search Games' />
            </div>
        </div>
        <div className="toggleMenu">

        </div>
    </div>
  )
}

export default Header