import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ players, yearRange }) => {
  const { t } = useTranslation();
  
  // Filtrer les années sélectionnées
  const startYear = yearRange[0];
  const endYear = yearRange[1];
  const yearIndexStart = startYear - 2015;
  const yearIndexEnd = endYear - 2015;
  const yearCount = yearIndexEnd - yearIndexStart + 1;

  // Préparer les données pour le graphique
  const chartData = {
    labels: players.map(player => player.name),
    datasets: [
      {
        label: t('goals'),
        data: players.map(player => 
          player.stats.goals
            .slice(yearIndexStart, yearIndexEnd + 1)
            .reduce((sum, goals) => sum + goals, 0) / yearCount
        ),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: t('assists'),
        data: players.map(player => 
          player.stats.assists
            .slice(yearIndexStart, yearIndexEnd + 1)
            .reduce((sum, assists) => sum + assists, 0) / yearCount
        ),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: t('fouls'),
        data: players.map(player => 
          player.stats.fouls
            .slice(yearIndexStart, yearIndexEnd + 1)
            .reduce((sum, fouls) => sum + fouls, 0) / yearCount
        ),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: t('playerComparison'),
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;