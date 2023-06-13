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
    ctx.fillStyle = chart.hoveredButton === 'left' ? "var(--color-primary-dark)" : "var(--color-primary)";
    ctx.fillRect(chartArea.left + 10, buttonY, 40, 20);

    // Botón derecho
    ctx.fillStyle = chart.hoveredButton === 'right' ? "var(--color-primary-dark)" : "var(--color-primary)";
    ctx.fillRect(chartArea.right - 50, buttonY, 40, 20);

    ctx.restore();
  },
  afterEvent: (chart, event) => {
    const {
      chartArea: { top, bottom, left, right, height },
      scales: { x },
    } = chart;

    const position = event.position;
    const lasValue = chart.data.labels.length - 1;

    if(event.type === 'mousemove') {
      // Verificamos si el cursor está sobre el botón izquierdo
      if (position.x >= left + 10 && position.x <= left + 50 && position.y >= top + (height / 2 - 10) && position.y <= top + (height / 2 + 10)) {
        chart.hoveredButton = 'left';
      }
      // Verificamos si el cursor está sobre el botón derecho
      else if (position.x >= right - 50 && position.x <= right - 10 && position.y >= top + (height / 2 - 10) && position.y <= top + (height / 2 + 10)) {
        chart.hoveredButton = 'right';
      }
      else {
        chart.hoveredButton = null;
      }
      chart.update();
    }

    if(event.type === 'click') {
      if (chart.options.scales.x.min > 0) {
        if (position.x >= left - 18 && position.x <= left + 18 && position.y >= top + height / 2 - 18 && position.y <= top + height / 2 + 18) {
          chart.options.scales.x.max -= 5;
          chart.options.scales.x.min -= 5;
        } else {
          chart.options.scales.x.min = 0;
        }
      }

      if (chart.options.scales.x.max < lasValue) {
        if (position.x >= right - 18 && position.x <= right + 18 && position.y >= top + height / 2 - 18 && position.y <= top + height / 2 + 18) {
          chart.options.scales.x.min += 5;
          chart.options.scales.x.max += 5;
        } else {
          chart.options.scales.x.max = lasValue;
        }
      }
      chart.update();
    }
  }
};

export default chartButtonsPlugin;
