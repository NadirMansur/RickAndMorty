import { useDispatch, useSelector } from "react-redux"
import {useState} from "react";
import Card from "../Card/Card"
import { removeFav, filterCards, orderCards, allChar } from "../../redux/actions/actions"
import style from './favorites.module.css';

const Favorites = () => {
    
    const [aux,setAux] = useState(false)
    
    const dispatch = useDispatch()
    //el distructuring de myFavorites, del estado, va a tomar cualquier cambio, mas alla de la key
    const myFavorites = useSelector((state) => state.myFavorites)

    const onClose = (id)=>{
        dispatch(removeFav(id))
    }

    const handleFilter = (event)=>{
        const gender = event.target.value;
        gender === "allChar" ? 
        dispatch(allChar()):
        dispatch(filterCards(gender))
        setAux(!aux);
    }

    const handleSort = (event)=>{
        const order = event.target.value;
        dispatch(orderCards(order))
        setAux(!aux);
    }


    return (
       <div>
            <div>
                <label htmlFor="">Filter by</label>
                <select name="" id="" onChange={handleFilter}>
                    <option value="allChar">All Chars</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
                <label htmlFor="">Sort by</label>
                <select name="" id="" onChange={handleSort}>
                    <option value="A">Acendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>
            <div  className={style.cards}>
                {myFavorites.map(
                character => 
                    <div>
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin}
                            image={character.image}
                            onClose={onClose}
                        />
                    </div>
                )}
            </div>
       </div>
                
    )
}
export default Favorites