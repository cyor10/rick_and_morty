import React from 'react';
import Card from "../Card/Card"
import style from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
      return <div
            className={style.cards}>
            {characters?.map(personaje => {
                  return <Card
                        key={personaje.id}
                        personaje={personaje}
                        onClose={onClose} />
            })}</div>;
}
