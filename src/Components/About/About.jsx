import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import profile_img from '../../assets/profile_img.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-sections">
                    <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’ve had the chance to work with Google, where I led the development of high-impact projects that improved system performance and user experience. Over the years, I’ve honed my skills in building scalable applications, solving complex problems, and collaborating with cross-functional teams to deliver results I’m proud of.</p>
                <p>I’m passionate about turning ideas into polished interfaces that users love and building designs that make an impact.</p>
            </div>
             <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"80%"}} />
                </div>
                   <div className="about-skill">
                    <p>React JS</p>
                    <hr style={{width:"40%"}} />
                </div>
                    <div className="about-skill">
                    <p>Javascript</p>
                    <hr style={{width:"70%"}} />
                </div>
                    <div className="about-skill">
                    <p>Next JS</p>
                    <hr style={{width:"40%"}} />
                </div>
            </div>
        </div>
    </div>
            <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OR EXPERIENCE</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OR EXPERIENCE</p>
            </div>
             <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>

    </div>
  )
}

export default About