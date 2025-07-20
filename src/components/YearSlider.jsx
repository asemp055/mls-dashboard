import React from 'react';
import { useTranslation } from 'react-i18next';

const YearSlider = ({ yearRange, onYearChange, minYear, maxYear }) => {
  const { t } = useTranslation();

  const handleChange = (e) => {
    const newStart = parseInt(e.target.value);
    onYearChange([newStart, maxYear]); // 2025 fixe
  };

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      margin: '20px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontWeight: 500 }}>{t('periodSelection')}:</span>
        <span style={{ 
          fontWeight: 'bold',
          backgroundColor: '#e9ecef',
          padding: '4px 8px',
          borderRadius: '4px'
        }}>
          {yearRange[0]} - {yearRange[1]}
        </span>
      </div>
      
      <input
        type="range"
        min={minYear}
        max={maxYear - 1}
        value={yearRange[0]}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '8px',
          borderRadius: '4px',
          background: 'linear-gradient(to right, #dee2e6 0%, #3498db 100%)',
          outline: 'none',
          WebkitAppearance: 'none'
        }}
      />
    </div>
  );
};

export default React.memo(YearSlider);