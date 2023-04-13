# React Chart App

Este proyecto es una aplicación React que muestra gráficas utilizando Chart.js y react-chartjs-2.

## Estructura del proyecto

??? App.css
??? App.jsx
??? App.test.js
??? Chart.jsx
??? chartButtonsPlugin.jsx
??? chartConfig.jsx
??? dataHandlers.js
??? datos.jsx
??? Header.jsx
??? index.css
??? index.js
??? labels.jsx
??? MyChart.js
??? Podium.jsx
??? reportWebVitals.js
??? Search.jsx


### Descripción de los archivos

- `App.css`: Estilos CSS para el componente principal de la aplicación.
- `App.jsx`: Componente principal de la aplicación que contiene la lógica para mostrar y actualizar las gráficas.
- `App.test.js`: Pruebas para el componente principal de la aplicación.
- `Chart.jsx`: Componente de gráfico que utiliza react-chartjs-2 para renderizar diferentes tipos de gráficas.
- `chartButtonsPlugin.jsx`: Plugin de Chart.js para agregar botones a las gráficas.
- `chartConfig.jsx`: Configuración de las opciones de gráficos y datos de ejemplo.
- `dataHandlers.js`: Funciones para manipular y actualizar los datos de las gráficas.
- `datos.jsx`: Datos de ejemplo para las gráficas.
- `Header.jsx`: Componente para el encabezado de la aplicación.
- `index.css`: Estilos CSS globales para la aplicación.
- `index.js`: Punto de entrada de la aplicación React.
- `labels.jsx`: Etiquetas de ejemplo para las gráficas.
- `MyChart.js`: Archivo que contiene una implementación antigua de Chart.js (no se utiliza en la aplicación actual).
- `Podium.jsx`: Componente para mostrar y controlar diferentes acciones, como mostrar el top 5, top 20, etc.
- `reportWebVitals.js`: Funciones de rendimiento de la aplicación (generadas automáticamente por Create React App).
- `Search.jsx`: Componente para el área de búsqueda y control de la aplicación.

## Instalación y ejecución

1. Clona este repositorio.

```bash
git clone https://github.com/yourusername/react-chart-app.git

2. Instala las dependencias del proyecto.

cd react-chart-app
npm install

3. Ejecuta la aplicación en modo de desarrollo.

npm start

La aplicación se abrirá en tu navegador web en http://localhost:3000.

Construcción y despliegue
Para crear la versión de producción de la aplicación, ejecuta:

npm run build

Esto generará una carpeta build con la versión optimizada y minificada de la aplicación. Puedes utilizar cualquier servidor web para servir esta carpeta o desplegarla en un servicio de alojamiento como Vercel o Netlify.
