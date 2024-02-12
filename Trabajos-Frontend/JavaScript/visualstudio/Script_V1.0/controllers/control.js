import usuarios from "../models/miModelo.js";

export const getusuarios = async (req, res) => {
  try {
    const usuarios = await usuarios.findAll()
    res.json(usuarioss)
  } catch (error) {
    res.json({ message: error.message });
  }
};


export const getusuario = async (req, res) => {
  try {
    const usuarios = await usuarios.findAll({
      where: {id: req.params.id}
    })
      res.json(usuarios[0])
  } catch (error) {
    res.json({ message: error.message });
  }
};


//crear un registro
export const createusuarios = async (req, res) => {
  try {
    await usuarios.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//actualizar un registro

export const updateusuarios = async (req, res) => {
  try {
    await usuarios.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};


//eliminar registro

export const deleteusuarios = async (req, res) => {
    try {
      await usuarios.destroy({
        where: { id: req.params.id },
      });
      res.json({
        message: "¡Registro eliminado correctamente!",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  };


  