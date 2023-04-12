import { datos } from "./datos";
import { labels } from "./labels";

function getTop20Data(chartData) {
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

  return newData;
}

function getBottom5Data(chartData) {
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

  return newData;
}

function getTop5Data(chartData) {
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

  return newData;
}

export { getTop20Data, getBottom5Data, getTop5Data };
