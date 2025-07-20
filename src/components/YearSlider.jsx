import React from 'react';
import { useTranslation } from 'react-i18next';

const YearSlider = ({ yearRange, onYearChange, minYear, maxYear }) => {
  const { t } = useTranslation();

  const handleChange = (e) => {
    const newStart = parseInt(e.target.value);
    onYearChange([newStart, maxYear]); // Toujours terminer par maxYear (2025)
  };

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '8px',
      margin: '20px 0'
    }}>
      <div style={{ marginBottom: '10px', fontWeight: '500' }}>
        {t('periodSelection')}: <strong>{yearRange[0]} - {yearRange[1]}</strong>
      </div>
      
      <input
        type="range"
        min={minYear}
        max={maxYear - 1} // -1 pour éviter 2025-2025
        value={yearRange[0]}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '8px',
          borderRadius: '4px',
          background: 'linear-gradient(to right, #ecf0f1 0%, #3498db 100%)',
          outline: 'none',
          WebkitAppearance: 'none'
        }}
      />
    </div>
  );
};

export default React.memo(YearSlider);