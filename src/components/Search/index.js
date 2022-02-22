import { useState } from 'react';
import SearchIcon from '../../images/search.svg';
import './search.css';

function Search() {
  const [term, setTerm] = useState('');

  return (
    <div className="search-box">
      <button type="button" className="btn-search">
        <img src={SearchIcon} alt="Icono de busqueda" />
      </button>
      <input type="text" className="input-search" placeholder="Buscar..." />
    </div>
  );
}

export default Search;
