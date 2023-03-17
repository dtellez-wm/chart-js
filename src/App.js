import React from "react";
import "./App.css";
import MyChart from "./MyChart";
import Header from "./Header";
import chartButtonsPlugin from "./chartButtonsPlugin";
import { datos } from "./datos";
import { labels } from "./labels";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const borderColors = [
  "rgba(238, 66, 102, 1)",
  "rgba(135, 246, 255, 1)",
  "rgba(246, 247, 64, 1)",
  "rgba(65, 234, 212, 1)",
  "rgba(157, 141, 241, 1)",
  "rgba(107, 5, 4, 1)",
  "rgba(0, 0, 0, 1)",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Ventas",
      data: datos, // Usamos los datos importados aquí
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: borderColors,
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    chartButtonsPlugin: {},
  },
};


function App() {
  return (
    <div className="App">
      <Header />
      <h1>Prueba</h1>
      <div className="prueba" style={{  }}>
        <Pie data={data} options={options} plugins={[chartButtonsPlugin]}></Pie>
      </div>
    </div>
  );
}

export default App;
