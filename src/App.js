import './App.css';
import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { error } from 'jquery';
import { Routes, Route } from 'react-router-dom';
import { useParams, useLocation} from 'react-router-dom';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import Abaut from './components/Abaut/Abaut';
import Detail from './components/Detail/Detail';
import Favorites from './components/favorites/Favorites';



function App() {
   
   const [characters, setCharacters] = useState([]);


   const location = useLocation();

   function onClose(id) {
      const filter = characters.filter(char  => char.id !== id);
      setCharacters(filter);
   }

   function onSearch(id,location) {
  
      if(location === '/home'){
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }).catch(error => window.alert('¡No hay personajes con este ID!'));
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
