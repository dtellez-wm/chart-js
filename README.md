# React Chart App

Este proyecto es una aplicaci�n React que muestra gr�ficas utilizando Chart.js y react-chartjs-2.

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


### Descripci�n de los archivos

- `App.css`: Estilos CSS para el componente principal de la aplicaci�n.
- `App.jsx`: Componente principal de la aplicaci�n que contiene la l�gica para mostrar y actualizar las gr�ficas.
- `App.test.js`: Pruebas para el componente principal de la aplicaci�n.
- `Chart.jsx`: Componente de gr�fico que utiliza react-chartjs-2 para renderizar diferentes tipos de gr�ficas.
- `chartButtonsPlugin.jsx`: Plugin de Chart.js para agregar botones a las gr�ficas.
- `chartConfig.jsx`: Configuraci�n de las opciones de gr�ficos y datos de ejemplo.
- `dataHandlers.js`: Funciones para manipular y actualizar los datos de las gr�ficas.
- `datos.jsx`: Datos de ejemplo para las gr�ficas.
- `Header.jsx`: Componente para el encabezado de la aplicaci�n.
- `index.css`: Estilos CSS globales para la aplicaci�n.
- `index.js`: Punto de entrada de la aplicaci�n React.
- `labels.jsx`: Etiquetas de ejemplo para las gr�ficas.
- `MyChart.js`: Archivo que contiene una implementaci�n antigua de Chart.js (no se utiliza en la aplicaci�n actual).
- `Podium.jsx`: Componente para mostrar y controlar diferentes acciones, como mostrar el top 5, top 20, etc.
- `reportWebVitals.js`: Funciones de rendimiento de la aplicaci�n (generadas autom�ticamente por Create React App).
- `Search.jsx`: Componente para el �rea de b�squeda y control de la aplicaci�n.

## Instalaci�n y ejecuci�n

1. Clona este repositorio.

```bash
git clone https://github.com/yourusername/react-chart-app.git

2. Instala las dependencias del proyecto.

cd react-chart-app
npm install

3. Ejecuta la aplicaci�n en modo de desarrollo.

npm start

La aplicaci�n se abrir� en tu navegador web en http://localhost:3000.

Construcci�n y despliegue
Para crear la versi�n de producci�n de la aplicaci�n, ejecuta:

npm run build

Esto generar� una carpeta build con la versi�n optimizada y minificada de la aplicaci�n. Puedes utilizar cualquier servidor web para servir esta carpeta o desplegarla en un servicio de alojamiento como Vercel o Netlify.
