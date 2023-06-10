import Card from '../Card/Card';
import style from './Cards.module.css';
import { useParams, useLocation} from 'react-router-dom';



export default function Cards(props) {
   return(
      <div className={style.cont}>
         {props.characters.map(
            character =>
            <div className={style.displayCarta} >
               { console.log("character id es: ", character.id, "y name es: ", character.name)}
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={props.onClose}
               />
               <hr />
            </div>)}
      </div>
      )
   ;
}


