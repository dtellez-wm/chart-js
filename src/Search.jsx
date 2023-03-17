import "./index.css";
function Search() {
  return (
    <form className="search">
      <input placeholder="Buscar por nombre" type="search" name="buscador" id="buscador" className="cssBuscador buscador" />
      <input placeholder="Buscar por valor" type="search" name="buscador" id="buscador2" className="cssBuscador buscador2" />
      <button className="btn" id="controls">
        Controles
      </button>
    </form>
  );
}

export default Search;
