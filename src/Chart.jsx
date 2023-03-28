import React from "react";
import { Pie, Line, Bar, Radar } from "react-chartjs-2";
import chartButtonsPlugin from "./chartButtonsPlugin";

const chartComponents = {
  pie: Pie,
  line: Line,
  bar: Bar,
  radar: Radar,
};

const Chart = ({ type, data, options }) => {
  const ChartComponent = chartComponents[type];

  return (
    <ChartComponent data={data} options={options} plugins={[chartButtonsPlugin]} />
  );
};

export default Chart;
