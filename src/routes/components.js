const router = require("express").Router();
const {
  addComponent_type,
  removeComponent_type,
  getAllComponent_type,
  getOneComponent_type,
  addComponent,
  getAllComponent,
  excludeComponent,
  removeComponent
} = require("../controllers/components");

// Components_categ entity
router.post("/categ", addComponent_type);

router.delete("/categ/:id", removeComponent_type);

router.get("/categ", getAllComponent_type);

router.get("/categ/:id", getOneComponent_type);

// Components entity

router.post("/", addComponent);

router.put('/:id', excludeComponent)

router.get('/:id', getAllComponent)

router.delete('/', removeComponent)

module.exports = router;
