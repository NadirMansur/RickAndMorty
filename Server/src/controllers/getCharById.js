const axios = require('axios'); 


//con await
const getCharById =async(req, res)=>{

  try{
    const {id} = req.params;
    const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    const obj = {
      id: data.id,
      name: data.name, 
      gender: data.gender, 
      species: data.species, 
      origin: data.origin, 
      image: data.image, 
      status: data.status
  }
  res.status(200).json(obj)
  }catch (error){
  if(error.response.status === 404){
    res.status(404).send('Not found')
  }else{
    res.status(500).json({message: error.message})
 }
  }

}

// const  getCharById = (req, res) =>{

//   const {id} = req.params;

//   //res.status(200).send('hola!')

// //const  getCharById = (res, id) =>{

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => {
//         const obj = {
//             id: response.data.id,
//             name: response.data.name, 
//             gender: response.data.gender, 
//             species: response.data.species, 
//             origin: response.data.origin, 
//             image: response.data.image, 
//             status: response.data.status
//         }
//          res.writeHead(200,{"Content-Type":"application/json"})
//          res.end(JSON.stringify(obj)) 
//         // console.log(response.data);
//         //res.status(200).json(obj)
//       })
//       .catch(error => {
//         if(error.response.status === 404){
//            res.status(404).send('Not found')
//          }else{
//            res.status(500).json({message: error.message})
//         }
//         // res.writeHead(500,{"Content-Type":"text/plain"})
//         // res.end(error.message)
//         // console.error(error.message);
//       });
// }

module.exports = getCharById;