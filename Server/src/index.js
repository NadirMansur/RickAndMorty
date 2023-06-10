const express = require('express');
const server = express();
const PORT = 3001;
const router = require ('./routes/index')
const morgan = require ('morgan');


//se configura midelware para setear headers
server.use(morgan("dev"))
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

//convierte en json para los REQUEST entrantes
server.use(express.json());
//agregar un path por defecto al inicio de nuestrar rutas
server.use("/rickandmorty", router) //agrega todas las rutas que creemos  modularizadas

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});






// const http = require("http");
// //const data = require("./utils/data.js");
// const getCharById = require("./controllers/getCharById");
// const PORT = 3001;

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     if(url.includes("/rickandmorty/character")){
//       const parts = url.split("/");
//       const id = parts.pop();
//       getCharById(res,id)
//       // const urlPart = url.split("/");
//       // const id = urlPart[urlPart.length -1];
//       // const character = data.find((character)=> character.id === Number(id)); //el find devuelve lo primero que consiga y el findAll todas las coincidencias

//       // if(!character){
//       //   res.writeHead(404,{"Content-Type":"text/plain"})
//       //   res.end("Route not found")
//       // }

//       // res.writeHead(200,{"Content-Type":"application/json"})
//       // res.end(JSON.stringify(character)) 
//     }
        
// }).listen(PORT,"localhost", ()=>{
//   console.log(`Servidor escuchando en puerto ${PORT}`)
// })

// // try{
// //
// //} catch (error){
//  // 
// //}