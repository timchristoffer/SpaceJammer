import React from 'react';
import '../styles/Menu.css'

import LinkedInLogo from '../Media/LinkedInLogo.png';

const AboutUs = () => {
    return (
        <>
            <div className='Container'>
                <h1>CREATED BY.</h1>
            </div>
            <div className="GameInfo">
                <h2>Linus a.k.a CodeCleaner</h2>
                <p>Coded Player & Cleaned up Code</p>
                <p>Found Music/SFX Sounds</p>
                <a href="https://www.linkedin.com/in/linus-ekermo-676192290/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInLogo} alt="LinkedIn" className="linkedinLogo" />
                </a>
            </div>
            <div className="GameInfo">
                <h2>Tim</h2>
                <p>Art & Design</p>
                <p>Coded Powerups</p>
                <a href="https://www.linkedin.com/in/tim-christoffer/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInLogo} alt="LinkedIn" className="linkedinLogo" />
                </a>
            </div>
            <div className="GameInfo">
                <h2>Kalle</h2>
                <p>Coded Menu/UI/Gamestate</p>
                <a href="https://www.linkedin.com/in/kalle/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInLogo} alt="LinkedIn" className="linkedinLogo" />
                </a>
            </div>
            <div className="GameInfo">
                <h2>Omar</h2>
                <p>Coded Enemies</p>
                <a href="https://www.linkedin.com/in/omar-ogaili-svensson-348616291/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInLogo} alt="LinkedIn" className="linkedinLogo" />
                </a>
            </div>
            <div className="GameInfo">
                <h2>Ahmed</h2>
                <p>Coded Bullets</p>
                <a href="https://www.linkedin.com/in/ahmed-mahmood-829a41141/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInLogo} alt="LinkedIn" className="linkedinLogo" />
                </a>
            </div>
            <footer>
                <p>.</p>
            </footer>
        </>
    );
}

export default AboutUs;
