import React, { useState } from 'react';

import MainMenu from '../components/Menu.jsx'
import AboutUs from '../components/Createdby.jsx'
import Download from '../components/Download.jsx'
import HomeContent from '../components/Home.jsx'
import Highscore from '../components/Highscore.jsx'

const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <MainMenu 
        showHome={() => setCurrentPage('home')} 
        showAboutUs={() => setCurrentPage('aboutus')} 
        showDownload={() => setCurrentPage('download')} 
        showHighscore={() => setCurrentPage('highscore')}
      />
      <div>
        {currentPage === 'home' && <HomeContent />}
        {currentPage === 'aboutus' && <AboutUs />}
        {currentPage === 'download' && <Download />}
        {currentPage === 'highscore' && <Highscore />}
      </div>
    </div>
  );
};

export default Home;
