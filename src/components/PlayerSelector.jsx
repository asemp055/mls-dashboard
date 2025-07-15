import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../context/LanguageContext';

const PlayerSelector = ({ players, selectedPlayer, onPlayerChange }) => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <div className="selector">
      <label>{t('playerSelection')}</label>
      <select 
        value={selectedPlayer} 
        onChange={onPlayerChange}
        aria-label={t('playerSelection')}
      >
        {players.map(player => (
          <option key={player.id} value={player.id}>
            {player.name} ({player.team}) - {language === 'fr' ? 'Joueur' : 'Player'} {player.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlayerSelector;