import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import { datos } from "./datos";
import { labels } from "./labels";
import Chart from "./Chart";
import Podium from "./Podium";
import { data, options } from "./chartConfig";
import { getTop20Data, getBottom5Data, getTop5Data } from "./dataHandlers";

function App() {
  const [chartType, setChartType] = useState("bar");
  const [chartData, setChartData] = useState(data);
  const [showPodium, setShowPodium] = useState(false);

  const [chartCanvas, setChartCanvas] = useState(null);

  function handleChartCanvas(canvas) {
    setChartCanvas(canvas);
  }

  function handleDownloadPngClick() {
    if (chartCanvas) {
      const link = document.createElement("a");
      link.href = chartCanvas.toDataURL("image/png");
      link.download = "chart.png";
      link.click();
    }
  }
  

  const handleControlsClick = () => {
    setShowPodium((prevShow) => !prevShow);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  function handleResetClick() {
    // Restablecer los datos y opciones del gráfico a su estado original
    setChartData(data);
    setChartType("bar");
  }

  function handleTop20Click() {
    const newData = getTop20Data(chartData);
    setChartData(newData);
    setChartType("bar");
  }

  function handleBottom5Click() {
    const newData = getBottom5Data(chartData);
    setChartData(newData);
    setChartType("pie");
  }

  function handleTop5Click() {
    const newData = getTop5Data(chartData);
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
        handleResetClick={handleResetClick}
        handleDownloadPngClick={handleDownloadPngClick}
      />
      <div className="prueba" style={{}}>
        <Chart handleChartCanvas={handleChartCanvas} type={chartType} data={chartData} options={options} />
      </div>
    </div>
  );
}

export default App;
