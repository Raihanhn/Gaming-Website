import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Header = () => {

  return (
    <div className="header">
        <a href="#" className='logo'>Gamers</a>
        <ul className="nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Tournament</a></li>
            <li><a href="#">Contact</a></li>
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