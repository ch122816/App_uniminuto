// SearchBar.js


import { HiOutlineSearch } from 'react-icons/hi'; // Importa el icono de búsqueda

export function SearchBar({ Name }) {
  return (
    <div className="parent-search">
      <input type="text" placeholder={Name} />
      <button type="submit">
        <HiOutlineSearch />
      </button>
    </div>
  );
}
