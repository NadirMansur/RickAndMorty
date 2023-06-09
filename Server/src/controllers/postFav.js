const { Favorite, User } = require("../DB_connection");

const postFavorite = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;

        if (!id || !origin || !name || !status || !image || !species || !gender)
            return res.status(401).json({ message: "Faltan datos" });

        await Favorite.findOrCreate({where: {
            id, name, origin, status, image, species, gender
        }});

        const allFavs = await Favorite.findAll()
        console.log(allFavs)
        return res.status(200).json(allFavs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
};
module.exports = postFavorite;