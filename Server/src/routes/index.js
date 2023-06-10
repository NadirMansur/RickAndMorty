const express = require("express");
//const {Router} = express;
//const router = Router();
const router = express.Router();
const getCharById = require('../controllers/getCharById');
const userLogin = require('../controllers/login');
const { postFav, deleteFav } = require("../controllers/handleFavorites");

router.get("/character/:id", getCharById);
router.get("/login", userLogin);
router.post("/fav",postFav);
router.delete("/fav/:id", deleteFav)

module.exports = router;