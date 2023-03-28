import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import { datos } from "./datos";
import { labels } from "./labels";
import Chart from "./Chart";
import Podium from "./Podium";
import { data, options } from "./chartConfig";

function App() {
  const [chartType, setChartType] = useState("pie");
  const [chartData, setChartData] = useState(data);
  const [showPodium, setShowPodium] = useState(false);

  const handleControlsClick = () => {
    setShowPodium((prevShow) => !prevShow);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  function handleTop20Click() {
    let pos = [];
    let top20 = [...datos].sort((a, b) => b - a).slice(0, 20);
    for (let i = 0; i < top20.length; i++) {
      pos.push(datos.indexOf(top20[i]));
    }
    const newLabels = pos.map((element) => labels[element]);
    const newData = {
      ...chartData,
      labels: newLabels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: top20,
        },
      ],
    };
    setChartData(newData);
    setChartType("bar");
  }

  function handleBottom5Click() {
    let bottom5 = [...chartData.datasets[0].data].sort((a, b) => a - b).slice(0, 5);
    let pos = [];
    for (let i = 0; i < bottom5.length; i++) {
      pos.push(chartData.datasets[0].data.indexOf(bottom5[i]));
    }
    const newLabels = pos.map((element) => chartData.labels[element]);
    const newData = {
      ...chartData,
      labels: newLabels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: bottom5,
        },
      ],
    };
    setChartData(newData);
    setChartType("pie");
  }

  function handleTop5Click() {
    let top5 = [...chartData.datasets[0].data].sort((a, b) => b - a).slice(0, 5);
    let pos = [];
    for (let i = 0; i < top5.length; i++) {
      pos.push(chartData.datasets[0].data.indexOf(top5[i]));
    }
    const newLabels = pos.map((element) => chartData.labels[element]);
    const newData = {
      ...chartData,
      labels: newLabels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: top5,
        },
      ],
    };
    setChartData(newData);
    setChartType("pie");
  }

  return (
    <div className="App">
      <Header />
      <Search onControlsClick={handleControlsClick} />
      <Podium
        handleTop20Click={handleTop20Click}
        handleBottom5Click={handleBottom5Click}
        handleTop5Click={handleTop5Click}
        show={showPodium}
        handleControlsClick={handleControlsClick}
      />
      <div className="prueba" style={{}}>
        <Chart type={chartType} data={chartData} options={options} />
      </div>
    </div>
  );
}

export default App;
