// chartButtonsPlugin.js
const chartButtonsPlugin = {
    id: 'chartButtonsPlugin',
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      ctx.save();
  
      const chartArea = chart.chartArea;
  
      // Bot�n izquierdo
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(chartArea.left - 50, chartArea.top, 40, 20);
  
      // Bot�n derecho
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(chartArea.right + 10, chartArea.top, 40, 20);
  
      ctx.restore();
    },
  };
  
  export default chartButtonsPlugin;
  