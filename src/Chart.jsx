import React, { useEffect, useRef } from "react";
import { Pie, Line, Bar, Radar } from "react-chartjs-2";

const chartComponents = {
  pie: (props) => <Pie {...props} />,
  line: (props) => <Line {...props} />,
  bar: (props) => <Bar {...props} />,
  radar: (props) => <Radar {...props} />,
};

const Chart = ({ type, data, options, handleChartCanvas, plugins }) => {
  const ChartComponent = chartComponents[type];
  const chartContainerRef = useRef();

  useEffect(() => {
    if (chartContainerRef.current) {
      const canvas = chartContainerRef.current.firstChild;
      handleChartCanvas(canvas);
    }
    return () => {
      handleChartCanvas(null);
    };
  }, [chartContainerRef, handleChartCanvas]);

  return (
    <div ref={chartContainerRef}>
      <ChartComponent data={data} options={options} plugins={plugins} />
    </div>
  );
};

export default Chart;
