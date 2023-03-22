import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import { datos } from "./datos";
import { labels } from "./labels";
import Chart from "./Chart";
import { data, options } from "./chartConfig";

function App() {
  const [chartType, setChartType] = useState("pie");

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  return (
    <div className="App">
      <Header />
      <Search />
      <div>
        <label htmlFor="chartType">Tipo de gráfico: </label>
        <select id="chartType" value={chartType} onChange={handleChartTypeChange}>
          <option value="pie">Pastel</option>
          {/* <option value="line">Linea</option> */}
          <option value="bar">Barras</option>
        </select>
      </div>
      <div className="prueba" style={{}}>
        <Chart type={chartType} data={data} options={options} />
      </div>
    </div>
  );
}

export default App;
