import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext, LanguageProvider } from './context/LanguageContext';
import { playersData, years } from './data/players';
import Header from './components/Header';
import PlayerSelector from './components/PlayerSelector';
import YearSlider from './components/YearSlider';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(1);
  const [yearRange, setYearRange] = useState([2015, 2025]);
  const { t, i18n } = useTranslation();
  const { language } = useContext(LanguageContext);

  // Synchronisation de la langue
  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('lang', language);
  }, [language, i18n]);

  const handlePlayerChange = (e) => {
    setSelectedPlayer(parseInt(e.target.value));
  };

  const handleYearChange = (newRange) => {
    setYearRange(newRange);
  };

  return (
    <div className="dashboard-container">
      <Header />
      
      <div className="controls">
        <PlayerSelector 
          players={playersData} 
          selectedPlayer={selectedPlayer} 
          onPlayerChange={handlePlayerChange} 
        />
        <YearSlider 
          years={years} 
          yearRange={yearRange} 
          onYearChange={handleYearChange} 
        />
      </div>
      
      <div className="charts">
        <div className="chart-container">
          <LineChart 
            years={years} 
            selectedPlayer={selectedPlayer} 
            players={playersData} 
            yearRange={yearRange}
          />
        </div>
        
        <div className="chart-container">
          <BarChart 
            players={playersData} 
            yearRange={yearRange}
          />
        </div>
      </div>
      
      <div className="description">
        <p>{t('description')}</p>
      </div>
      
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

export default AppWrapper;