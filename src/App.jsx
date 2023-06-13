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
import chartButtonsPlugin from "./chartButtonsPlugin";

function App() {
  const [chartType, setChartType] = useState("bar");
  const [chartData, setChartData] = useState(data);
  const [showPodium, setShowPodium] = useState(false);

  const [chartCanvas, setChartCanvas] = useState(null);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(20); // Asume que inicialmente se muestran 20 puntos de datos

  const handleLeftButtonClick = () => {
    if (startIndex - 5 >= 0) { // Asume que te mueves 5 puntos de datos a la vez
      setStartIndex(startIndex - 5);
      setEndIndex(endIndex - 5);
    }
  };

  const handleRightButtonClick = () => {
    if (endIndex + 5 <= data.length) { // Asume que te mueves 5 puntos de datos a la vez
      setStartIndex(startIndex + 5);
      setEndIndex(endIndex + 5);
    }
  };


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
    // Restablecer los datos y opciones del gr�fico a su estado original
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
        <div className="chart-container">
          <button className="chart-button left" onClick={handleLeftButtonClick}>
            Izquierda
          </button>
          <button className="chart-button right" onClick={handleRightButtonClick}>
            Derecha
          </button>
          <Chart plugins={[chartButtonsPlugin]} handleChartCanvas={handleChartCanvas} type={chartType} data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default App;
