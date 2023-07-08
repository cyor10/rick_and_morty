import React from "react";
import { useState } from "react";
import { connect } from 'react-redux';

function SearchBar({ onSearch, isLoading }) {
   const [id, setId] = useState('');

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         onSearch(id)
         setId("")
      }
   }

   const handleChange = (evento) => {
      setId(evento.target.value);
   }

   return (
      <div>
         <input
            type='search'
            placeholder="Inserte id"
            onChange={handleChange}
            onKeyUp={handleEnter}
            value={id} />
         <button onKeyUp={() => onSearch(id)} onClick={() => onSearch(id)} disabled={isLoading}>{isLoading ? 'Cargando...' : 'Agregar'}</button>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      isLoading: state.isLoading
   };
};

export default connect(mapStateToProps)(SearchBar);
