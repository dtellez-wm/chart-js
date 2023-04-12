import React from "react";
import { Pie, Line, Bar, Radar } from "react-chartjs-2";
import chartButtonsPlugin from "./chartButtonsPlugin";

const chartComponents = { // Chart components
  pie: (props) => <Pie {...props} />,
  line: (props) => <Line {...props} />,
  bar: (props) => <Bar {...props} />,
  radar: (props) => <Radar {...props} />,
};

const Chart = ({ type, data, options }) => {
  const ChartComponent = chartComponents[type];

  return (
    <ChartComponent data={data} options={options} plugins={[chartButtonsPlugin]} />
  );
};


export default Chart;
