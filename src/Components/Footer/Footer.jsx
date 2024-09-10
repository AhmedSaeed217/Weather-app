import React from 'react'
import './Footer.css'
import openWeather from '../../assets/images/openweather.png'
function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <p>Copyright 2024&copy; Developed By <a target='_blank' href="https://a-saeed.netlify.app/" rel="noreferrer">Ahmed Saeed.</a> All Rights Reserved</p>
                <div className="openweather-rights">
                    <span>Powered By</span>

                    <img src={openWeather} alt="open weather" />

                    <span>Design By <a href="https://x.com/codewithsadee">Sadee</a></span>
                </div>

            </div>


        </div>
    )
}

export default Footer;