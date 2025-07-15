import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="dashboard-header">
      <h1>{t('dashboardTitle')}</h1>
      <div className="language-switcher">
        <button 
          onClick={toggleLanguage}
          className={language === 'fr' ? 'active' : ''}
          aria-label="Toggle language"
        >
          {language === 'fr' ? 'FR' : 'EN'}
        </button>
      </div>
    </header>
  );
};

export default Header;