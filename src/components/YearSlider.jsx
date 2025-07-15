import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { years } from '../data/players';

const YearSlider = ({ yearRange, onYearChange }) => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [sliderValue, setSliderValue] = useState(yearRange);

  // Initialisation sécurisée
  useEffect(() => {
    setIsReady(true);
    return () => setIsReady(false);
  }, []);

  // Gestion des changements avec vérification de sécurité
  const handleChange = useCallback((event, newValue) => {
    if (!sliderRef.current || !isReady) return;
    setSliderValue(newValue);
    onYearChange(newValue);
  }, [isReady, onYearChange]);

  // Synchronisation externe
  useEffect(() => {
    if (JSON.stringify(yearRange) !== JSON.stringify(sliderValue)) {
      setSliderValue(yearRange);
    }
  }, [yearRange]);

  // Slider stylisé avec protection contre le null
  const SafeSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 8,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: 'unset',
      color: theme.palette.text.primary,
      '&:before': { display: 'none' },
    },
  }));

  if (!isReady) return null;

  return (
    <div 
      className="slider-container" 
      ref={sliderRef}
      style={{ width: '100%', padding: '0 15px' }}
    >
      <label>{t('periodSelection')}: {sliderValue[0]} - {sliderValue[1]}</label>
      <SafeSlider
        value={sliderValue}
        onChange={handleChange}
        onChangeCommitted={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={years[0]}
        max={years[years.length - 1]}
        disableSwap
      />
    </div>
  );
};

export default React.memo(YearSlider);