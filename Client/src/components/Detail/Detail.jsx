import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
//revisar la importacon de style.
import style from './detail.module.css';


export default function Detail ({onSearch}) {
    
    const {id} = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);



    return(
        <div className={style.centro}>
            {character?.name && (
                <div className= {style.detail}> 
                    <div className={style.card}>
                        <h2>Nombre: {character.name}</h2>
                        <h2>Estado: {character.status}</h2>
                        <h2>Especie: {character.species}</h2>
                        <h2>Genero: {character.gender}</h2>
                        <h2>From: {character.origin.name}</h2>
                    </div>
                    <div className={style.cont}>
                        <img className={style.imagen} src={character.image} alt='' />
                    </div>
                </div>
                )
            }
            <Link to={"/home"}>
                <button>Volver a home</button>
            </Link>
        </div>
    )
}