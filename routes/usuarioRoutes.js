import express from "express";
import { registrar } from "../controller/usuarioController.js";

const usuarioRouter = express.Router()

//Autenticacicon, registro y confirmacion de Usuarios
usuarioRouter.post('/',registrar); //crea un nueo usuario

export default usuarioRouter