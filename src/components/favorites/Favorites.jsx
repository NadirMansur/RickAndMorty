import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import { removeFav } from "../../redux/actions/actions"

const Favorites = () => {

    const dispatch = useDispatch()

    const myFavorites = useSelector((state) => state.myFavorites)

    const onClose = (id)=>{
        dispatch(removeFav(id))
    }
    return (
       <div>
           {myFavorites.map( character => {
                return(
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
                )
           }
        )
    }
       </div>
                
    )
}
export default Favorites