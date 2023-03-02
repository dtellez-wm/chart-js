import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [
    {
      label: 'Ventas',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
};

const MyChart = () => {
  return (
    <div>
      <h2>Ventas por mes</h2>
      <Bar data={data} options={options} key="unique-key"/>
    </div>
  );
};

export default MyChart;
