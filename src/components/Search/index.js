import { useDispatch } from 'react-redux';
import SearchIcon from '../../images/search.svg';
import { getCommercesWithoutUser } from '../../store/app/commerceSlice';
import './search.css';

function Search({ type, interest }) {
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(getCommercesWithoutUser({ search: event.target.value, type, interest }));
    }
  };

  return (
    <div className="search-box">
      <button type="button" className="btn-search">
        <img src={SearchIcon} alt="Icono de busqueda" />
      </button>
      <input
        onKeyPress={handleKeyPress}
        type="text"
        className="input-search"
        placeholder="Buscar..."
      />
    </div>
  );
}

export default Search;
