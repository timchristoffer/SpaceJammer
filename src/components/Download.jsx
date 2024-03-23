import React from 'react';
import '../styles/Menu.css';

const Download = () => {
    return (
        <div className='Container'>
            <h1>Download.</h1>
            <p>Early.. early.. early.. early BETA of Space Jammer out NOW!</p>
            <a href="/path/to/your/file.zip" download>
                <button className="downloadButton">Download Now</button>
            </a>
        </div>
    );
}

export default Download;