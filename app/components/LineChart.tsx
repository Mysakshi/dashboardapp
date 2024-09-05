// components/LineChart.tsx
"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { lineChartData } from '../data/mockData';  // Import mock data

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart: React.FC = () => {
  return <Line data={lineChartData} />;
};

export default LineChart;
