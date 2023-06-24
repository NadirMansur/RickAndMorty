import './App.css';
import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { error } from 'jquery';
import { useParams, useLocation, useNavigate ,Routes, Route} from 'react-router-dom';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import Abaut from './components/Abaut/Abaut';
import Detail from './components/Detail/Detail';
import Favorites from './components/favorites/Favorites';



function App() {
   
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const location = useLocation();

   function onClose(id) {
      const filter = characters.filter(char  => char.id !== id);
      setCharacters(filter);
   }

   const [access, setAccess] = useState(false) //local state access condition
   const EMAIL = 'nadirmansur89@gmail.com'   //mock off user
   const PASSWORD = 'Contraseña00'      //mock off password

   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access ? navigate('/home'): window.alert("User or pass invalid")
      } catch (error) {
         console.log(error)
      }
   }

   function onSearch(id,location) {
  
      if(location === '/home'){
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            console.log("data es: ",data)
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }).catch(error => window.alert(error.message , error.response.data , '¡No hay personajes con este ID!'));
      }else{
         window.alert('para agregar cartas dirijase a Home, anda pa alla bobo');
      }
   }

   return ( 
      <div className='App'>
         <div>
         {location.pathname !== "/" ? <Nav onSearch={onSearch}/> : null}
         </div>
         <div>
            <Routes>
               <Route
               path="/"
               element={
                  <Form>
                  </Form>
               }>
                  
               </Route>
               <Route 
                  path="/home" 
                  element={
                     <Cards
                        characters={characters} onClose={onClose}>
                     </Cards>
                  }>
               </Route>
               <Route path="/abaut" element={
                  <Abaut></Abaut>}>
               </Route>
               <Route path="/detail/:id" element={
                  <Detail></Detail>}>
               </Route>
               <Route path = "/favorites" element= {<Favorites/>}></Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;
