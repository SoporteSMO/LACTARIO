import { DataTypes } from "sequelize";
import db from "../config/db.js";
import bcrypt from "bcrypt";

const Usuario = db.define("usuario", {
  id_Usuario: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
    trim: true,
  },
  token: DataTypes.STRING,
  confirmado: {
    type: DataTypes.BOOLEAN,
    defaultValue:false
  },
},{
  //creamaos hooks 
  hooks:{
    //esto se ejecutara antes de insertar el usuario
    beforeCreate: async (usuario)=>{
      //generamos 10 saltos de hasheo
      const salt = await bcrypt.genSalt(10)
      usuario.password = await bcrypt.hash(usuario.password,salt)
    }
  }
})



export default Usuario;