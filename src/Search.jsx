import React, { useState } from "react";
import "./index.css";

function Search({ onControlsClick, onSearchChange }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onSearchChange(event.target.value);
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
        value={searchValue}
        onChange={handleSearchChange}
      />
       <input placeholder="Buscar por valor" type="search" name="buscador" id="buscador2" className="cssBuscador buscador2" />
      <button className="btn" id="controls" onClick={onControlsClick}>
        Controles
      </button>
    </form>
  );
}

export default Search;
