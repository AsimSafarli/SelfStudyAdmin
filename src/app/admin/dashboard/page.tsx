"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Bakalavrların Bal İntervalları üzrə Dağılımı',
    },
  },
};

const labels = [
  '0 - 30', '30 - 35', '35 - 40', '40 - 45', '45 - 50', 
  '50 - 55', '55 - 60', '60 - 65', '65 - 70', '70 - 75', 
  '75 - 80', '80 - 85', '85 - 90', '90 - 95', '95 - 100'
];

const data1 = [2301, 1932, 2613, 3204, 3351, 3069, 2707, 2100, 1475, 1035, 613, 279, 135, 39, 5];
const data2 = [1670, 1254, 1863, 2261, 2732, 2924, 2825, 2527, 2056, 1737, 1150, 633, 325, 132, 29];

export const data = {
  labels,
  datasets: [
    {
      label: '2024 Bakalavrların sayı',
      data: data1,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '2023 Bakalavrların sayı',
      data: data2,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function AppStatiska() {
  return <Bar options={options} data={data} />;
}

function DashboardPage() {
  return (
    <div>
      <AppStatiska/>
    </div>
  );
}

export default DashboardPage;
