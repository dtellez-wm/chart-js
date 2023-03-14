import React from "react";
import "./App.css";
import MyChart from "./MyChart";
import Header from "./Header";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
      {
        label: "Ventas",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
  };

  return (
    <div className="App">
      <Header/>
      <h1>My Charts</h1>
      <div style={{ padding: "20px", width: "50%", border: "1px solid #ccc", borderRadius: "5px" }}>
      <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
}

export default App;
