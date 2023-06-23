import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './Detail.module.css'

export default function Detail() {
    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div className={style.detail}>
            <div className={style.img}>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
            </div>
            <div className={style.box}>
                    <h3>Status: {character.status}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Species: {character.species}</h3>
                    <p><b>Origin:</b> {character.origin?.name}</p>
                    <p><b>Location:</b> {character.location?.name}</p>
            </div>
        </div>
    )
}
