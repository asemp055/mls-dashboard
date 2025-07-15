import React from 'react';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = ({ years, selectedPlayer, players, yearRange }) => {
  const { t } = useTranslation();
  const player = players.find(p => p.id === selectedPlayer);
  const [startYear, endYear] = yearRange;
  const startIndex = years.indexOf(startYear);
  const endIndex = years.indexOf(endYear);
  const filteredYears = years.slice(startIndex, endIndex + 1);

  const chartData = {
    labels: filteredYears,
    datasets: [
      {
        label: t('goalsScored'),
        data: player.stats.goals.slice(startIndex, endIndex + 1),
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#2980b9',
        pointRadius: 5,
        pointHoverRadius: 7,
        yAxisID: 'y'
      },
      {
        label: t('assists'),
        data: player.stats.assists.slice(startIndex, endIndex + 1),
        borderColor: '#2ecc71',
        backgroundColor: 'rgba(46, 204, 113, 0.1)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#27ae60',
        pointRadius: 5,
        pointHoverRadius: 7,
        yAxisID: 'y'
      },
      {
        label: t('fouls'),
        data: player.stats.fouls.slice(startIndex, endIndex + 1),
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(231, 76, 60, 0.1)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#c0392b',
        pointRadius: 5,
        pointHoverRadius: 7,
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: `${t('goalsPerSeason')} - ${player.name}`,
        font: {
          size: 18
        },
        padding: {
          bottom: 20
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 16
        },
        bodyFont: {
          size: 14
        },
        padding: 12
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: `${t('goals')}/${t('assists')}`
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: t('fouls')
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '400px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;