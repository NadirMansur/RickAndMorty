import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
//revisar la importacon de style.
import style from "../Card/Less/dist/Card.module.css"


export default function Detail ({onSearch}) {
    
    const {id} = useParams()
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



    return(
        <div>
            {character?.name && (
                <div>
                    <div className={style.info}>
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