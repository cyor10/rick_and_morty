import React, { useState } from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addFav, removeFav } from "../../redux/actions.js";

function Card({ personaje, onClose, addFav, removeFav }) {
   const { id, name, gender, species, origin, image, status } = personaje

   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(personaje);
      }
   };

   return (
      <div className={style.card}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h1>{name}</h1>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt='' />
      </div>
   );
}

const mapDispatchToProps = function (dispatch) {
   return {
      addFav: function (personaje) {
         dispatch(addFav(personaje))
      },
      removeFav: function (id) {
         dispatch(removeFav(id))
      }
   }
};

export default connect(null, mapDispatchToProps)(Card)