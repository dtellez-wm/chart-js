// chartButtonsPlugin.js
const chartButtonsPlugin = {
  id: "chartButtonsPlugin",
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    ctx.save();

    const chartArea = chart.chartArea;

// Calcular posición vertical central de los botones
const buttonY = chartArea.top + (chartArea.bottom - chartArea.top - 20) / 2;

// Botón izquierdo
ctx.fillStyle = "var(--color-primary)";
ctx.fillRect(chartArea.left + 10, buttonY, 40, 20);

// Botón derecho
ctx.fillStyle = "var(--color-primary)";
ctx.fillRect(chartArea.right - 50, buttonY, 40, 20);

    ctx.restore();
  },
};

export default chartButtonsPlugin;