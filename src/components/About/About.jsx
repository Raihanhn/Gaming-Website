import React from 'react'
import img1 from '../../assets/img/img1.png'

const About = () => {
  return (
    <div className="about" id="about">
        <div className="contentBx">
            <h2>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio odit corrupti aliquam cupiditate unde suscipit, voluptas officia incidunt, molestias odio dolores consequatur quibusdam nulla delectus dignissimos excepturi quod nihil quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio odit corrupti aliquam cupiditate unde suscipit, voluptas officia incidunt, molestias odio dolores consequatur quibusdam nulla delectus dignissimos excepturi quod nihil quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio odit corrupti odio dolores consequatur quibusdam nulla delectus dignissimos excepturi quod nihil quam.</p>
            <a href="#">Read more</a>
        </div>
        <img src={img1} alt="" />
    </div>
  )
}

export default About