import React from 'react'
import img from '../../assets/img/pubg.png'

const Banner = () => {
  return (
    <div className='banner' id="home">
        <div className="bg">
            <div className="content">
                <h2>A New Home For <br/>
                Game Lovers
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat!</p>
                <a href="#" className='btn'>Join Now</a>
            </div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Banner