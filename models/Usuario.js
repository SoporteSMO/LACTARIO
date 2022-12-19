import { DataTypes } from "sequelize";
import db from "../config/db.js";
// import bcrypt from "bcrypt";

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
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
    trim: true,
    unique: true,
  },
  token: DataTypes.STRING,
  confirmado: {
    type: DataTypes.BOOLEAN,
    defaultValue:false
  },
});



export default Usuario;