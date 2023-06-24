let myFavorites = [];
const {Favorite} = require("../DB_connection")


const postFav = (req, res)=>{
    myFavorites.push(req.body);
    res.status(201).json(myFavorites);
}

const deleteFav = async (req,res)=>{
    const { id } = req.params
    try {
        if (!id) return res.status(400).json({error:"Faltan datos"})
        await Favorite.destroy({
            where: {
                id:id
            }
        })
        const favs = await Favorite.findAll()
        return res.status(200).json(favs)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// const deleteFav = (req, res)=>{
//     myFavorites = myFavorites.filter((fav)=>{
//         return Number(req.params.id) != fav.id
//     })
//     res.json(myFavorites);
// }

module.exports = {postFav, deleteFav}