// src/data/players.js
export const playersData = [
  {
    id: 1,
    name: "Lionel Messi",
    team: "Inter Miami CF",
    stats: {
      goals: [10, 12, 15, 18, 22, 25, 28, 30, 32, 30, 28], // 2015-2025
      assists: [8, 10, 12, 15, 18, 20, 22, 25, 28, 25, 23],
      fouls: [12, 10, 8, 7, 6, 5, 4, 3, 2, 3, 4],
      shotsOnTarget: [45, 50, 55, 60, 65, 70, 75, 80, 85, 80, 75]
    }
  },
  {
    id: 2,
    name: "Héctor Herrera",
    team: "Houston Dynamo",
    stats: {
      goals: [5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11],
      assists: [10, 12, 14, 16, 18, 20, 22, 24, 26, 24, 22],
      fouls: [15, 14, 13, 12, 11, 10, 9, 8, 7, 8, 9],
      shotsOnTarget: [30, 32, 34, 36, 38, 40, 42, 44, 46, 44, 42]
    }
  },
  {
    id: 3,
    name: "Denis Bouanga",
    team: "LAFC",
    stats: {
      goals: [8, 9, 10, 12, 14, 16, 18, 20, 22, 20, 18],
      assists: [6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 12],
      fouls: [10, 9, 8, 7, 6, 5, 4, 3, 2, 3, 4],
      shotsOnTarget: [35, 37, 39, 41, 43, 45, 47, 49, 51, 49, 47]
    }
  },
  {
    id: 4,
    name: "Lorenzo Insigne",
    team: "Toronto FC",
    stats: {
      goals: [7, 8, 9, 11, 13, 15, 17, 19, 21, 19, 17],
      assists: [7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 13],
      fouls: [9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3],
      shotsOnTarget: [32, 34, 36, 38, 40, 42, 44, 46, 48, 46, 44]
    }
  },
  {
    id: 5,
    name: "Cristian Arango",
    team: "Real Salt Lake",
    stats: {
      goals: [9, 10, 12, 14, 16, 18, 20, 22, 24, 22, 20],
      assists: [5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11],
      fouls: [11, 10, 9, 8, 7, 6, 5, 4, 3, 4, 5],
      shotsOnTarget: [38, 40, 42, 44, 46, 48, 50, 52, 54, 52, 50]
    }
  }
];

export const years = Array.from({length: 11}, (_, i) => 2015 + i);