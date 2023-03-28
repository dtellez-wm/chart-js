import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import { datos } from "./datos";
import { labels } from "./labels";
import Chart from "./Chart";
import Podium from "./Podium";
import { data, options } from "./chartConfig";

function handleTop20Click(chartData, setChartData, setChartType) {
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


function App() {
  const [chartType, setChartType] = useState("pie");
  const [chartData, setChartData] = useState(data);

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  return (
    <div className="App">
      <Header />
      <Search />
      <Podium handleTop20Click={() => handleTop20Click(chartData, setChartData, setChartType)} />
      <div className="prueba" style={{}}>
        <Chart type={chartType} data={chartData} options={options} />
      </div>
    </div>
  );
}

export default App;
