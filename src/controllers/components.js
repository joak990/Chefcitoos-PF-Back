const { components_categ } = require("../dataBase/models");

// Components_categ logic

const addComponent_type = async (req, res) => {
  let { name } = req.body;

  try {
    if (!name) throw new Error("Campo nombre obligatorio");

    const result = components_categ.create({ name: name });

    res.json(result).status(201);
  } catch (error) {
    console.log(error);
  }
};

const getAllComponent_type = async (req, res) => {
  try {
    const result = await components_categ.findAll();
    res.json(result).status(200);
  } catch (error) {
    console.log(error);
  }
};

const removeComponent_type = async (req, res) => {
  const { id } = req.params;
  if (!id)
    throw new Error("especifique el id del component_categ para eliminar");
  try {
    const result = await components_categ.destroy({
      where: {
        id: id,
      },
    });
    res.json(result).status(200);
  } catch (error) {
    console.log(error);
  }
};

const getOneComponent_type = async ( req, res ) => {
    
    let { id } = req.params;
    
    try {
        const result = await components_categ.findByPk(id)

        res.json(result).status(200)

    } catch (error) {

        console.log(error)

    }
}

// Components logic

const { Components } = require('../dataBase/models')

const addComponent = async ( req, res ) => {
  let { description, name, Components_type } = req.body;
  
  try {
    /*const result = await Components.create({})

    res.json(result).status(201)*/
    console.log({ description, name, Components_type })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  addComponent_type,
  getAllComponent_type,
  removeComponent_type,
  getOneComponent_type,
  addComponent
};
