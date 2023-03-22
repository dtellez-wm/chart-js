import { datos } from "./datos";
import { labels } from "./labels";
import chartButtonsPlugin from "./chartButtonsPlugin";

const borderColors = [
  // Tus colores de borde
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Ventas",
      data: datos,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: borderColors,
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    chartButtonsPlugin: {},
  },
};

export { data, options };
