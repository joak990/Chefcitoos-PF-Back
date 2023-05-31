const router = require("express").Router();
const {
  addComponent_type,
  removeComponent_type,
  getAllComponent_type,
  getOneComponent_type,
  addComponent
} = require("../controllers/components");

// Components_categ entity
router.post("/categ", addComponent_type);

router.delete("/categ/:id", removeComponent_type);

router.get("/categ", getAllComponent_type);

router.get("/categ/:id", getOneComponent_type);

// Components entity

router.post("/", addComponent);

module.exports = router;
