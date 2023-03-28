import React from "react";

function Podium({  handleTop20Click, handleBottom5Click, handleTop5Click, show, handleControlsClick }) {
  
  return (
    <div className={`podium ${show ? "show" : ""}`}>
      <h2 className="title">Controles</h2>
      <div className="button_container">
        <button className="btn" id="Top5" onClick={handleTop5Click}>Top 5</button>
        <button className="btn" id="Top20" onClick={handleTop20Click} >Radar</button>
        <button className="btn" id="Bottom5" onClick={handleBottom5Click}>Bottom 5</button>
        <button className="btn" id="All">Reset</button>
        <button className="btn" id="showGrid">Grid</button>
        <button className="btn" id="downloadPng">Descargar PNG</button>
        <button className="btn" id="downloadJpg">Descargar JPG</button>
        <button className="btn" id="maxValue">Valor maximo</button>
        <button className="btn" id="minValue">Valor minimo</button>
        <div className="zoom_box">
          <button className="btn" id="zoomIn">+ Zoom In</button>
          <button className="btn" id="zoomOut">- Zoom Out</button>
          <p>O usa la rueda del raton</p>
        </div>
      </div>
      <div className="medidas_container">
        <div className="medidas_title">
          <h2>Medidas aritmeticas</h2>
        </div>
        <div className="medidas">
          <p id="average">El promedio de los valores es: 652</p>
          <p id="min_value">El valor minimo es: 14</p>
          <p id="max_value">El valor maximo es: 7175</p>
        </div>
      </div>
      <div className="select_container">
        <label htmlFor="select">Selecciona el tipo de grafica</label>
        <select name="select" id="select" className="select">
          <option value="bar">bar</option>
          <option value="line">line</option>
          <option value="bubble">bubble</option>
        </select>
        <div className="icon_container">
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div className="filter_container">
        <h2>Filtro</h2>
        <div className="filter_box">
          <input type="number" id="min" placeholder="" required />
          <span>Valor minimo</span>
        </div>
        <div className="filter_box">
          <input type="number" id="max" placeholder="" required />
          <span>Valor maximo</span>
        </div>
        <button className="btn" id="filter">filtro</button>
      </div>

      <div id="toggle">
        <i className="indicator"></i>
      </div>
    </div>
  );
}

export default Podium;
