const express = require("express");
//const {Router} = express;
//const router = Router();
const router = express.Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const postUser = require("../controllers/postUser");
const postFavorite = require("../controllers/postFav"); 

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav",postFavorite);
router.delete("/fav/:id", deleteFav)

module.exports = router;