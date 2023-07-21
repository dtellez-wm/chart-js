import React, { useState } from "react";
import "./index.css";

function Search({ onControlsClick, onNameSearchChange, onDataSearchChange }) {
  const [nameSearchValue, setNameSearchValue] = useState('');
  const [dataSearchValue, setDataSearchValue] = useState('');

  const handleNameSearchChange = (event) => {
    setNameSearchValue(event.target.value);
    onNameSearchChange(event.target.value);
  };

  const handleDataSearchChange = (event) => {
    setDataSearchValue(event.target.value);
    onDataSearchChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        placeholder="Buscar por nombre"
        type="search"
        name="buscador"
        id="buscador"
        className="cssBuscador buscador"
        value={nameSearchValue}
        onChange={handleNameSearchChange}
      />
      <input
        placeholder="Buscar por valor"
        type="search"
        name="buscador"
        id="buscador2"
        className="cssBuscador buscador2"
        value={dataSearchValue}
        onChange={handleDataSearchChange}
      />
      <button className="btn" id="controls" onClick={onControlsClick}>
        Controles
      </button>
    </form>
  );
}

export default Search;
