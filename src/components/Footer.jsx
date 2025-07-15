import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <p>{t('dashboardTitle')} - © {new Date().getFullYear()}</p>
      <p>
        <a href="https://github.com/asemp055/mls-dashboard" target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a> | 
        <a href="mailto:contact@example.com">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;