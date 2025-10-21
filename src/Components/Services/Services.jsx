import React from 'react'
import  './Services.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="services-container">
            <div className="card">
                <h3>Web design</h3>
                <p> I can build a sleek personal portfolio with React</p>
            </div>
            <div className="card">
                 <h3>E-commerce Dashboard</h3>
                 <p> "An interactive admin dashboard for managing products, sales, and users with dynamic charts.",</p>
            </div>
            <div className="card">
                <h3>weather App</h3>
                <p>"A responsive weather app showing real-time weather data using OpenWeather API.",</p>
            </div>

        </div>
    </div>
  )
}

export default Services