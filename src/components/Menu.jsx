import React from "react";
import "../styles/Menu.css";

import homeButton from "../Media/HomeButton.png";
import infoButton from "../Media/InfoButton.png";
import downloadButton from "../Media/DownloadButton.png";
import highscoreButton from "../Media/HighscoreButton.png";
import Header from "../Media/SpaceJammerMenuTitle.gif";

export default function Menu({ showHome, showAboutUs, showDownload, showHighscore }) {
  return (
    <>
        <div className="Header">
            <img src={Header} alt="Header"/>
        </div>

            <div className="menuButtons">
            <div className="Buttons">
                <button onClick={showHome} className="buttonLink">
                <img src={homeButton} alt="Home" className="button" />
                <p>Home</p>
                </button>
                <button onClick={showAboutUs} className="buttonLink">
                <img src={infoButton} alt="Info" className="button" />
                <p>Creators</p>
                </button>
                <button onClick={showDownload} className="buttonLink">
                <img src={downloadButton} alt="Download" className="button" />
                <p>Download</p>
                </button>
                <button onClick={showHighscore} className="buttonLink">
                <img src={highscoreButton} alt="Highscore" className="button" />
                <p>Highscore</p>
                </button>
            </div>
            </div>
    </>            
  );
}
