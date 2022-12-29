import Usuario from "../models/Usuario.js";

const registrar = async (req, res) => {
  console.log(req.body);
  //Evitar usuarios duplicados

  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email });

  if (existeUsuario) {
      const error = new Error('El usuario ya esta registrado')
      return res.status(400).json({msg:error.message})
  }

  try {
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
  } catch (error) {
    res.send("Hay error");
  }
};

export { registrar };
