import "./index.css";

function Search({ onControlsClick }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input placeholder="Buscar por nombre" type="search" name="buscador" id="buscador" className="cssBuscador buscador" />
      <input placeholder="Buscar por valor" type="search" name="buscador" id="buscador2" className="cssBuscador buscador2" />
      <button className="btn" id="controls" onClick={onControlsClick}>
        Controles
      </button>
    </form>
  );
}

export default Search;