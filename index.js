import express from "express";
import db  from "./config/db.js";
import dotenv from "dotenv";
dotenv.config({path:'.env'});
import usuarioRouter from "./routes/usuarioRoutes.js";

const app = express();

//para poder enviar respuestas tipo json
app.use(express.json())

//conexion BDD
try {
    await db.authenticate();
    db.sync();
    console.log('Conexion correcta a la BDD');
} catch (error) {
    console.log('error en la base');
}
//INICIO BASE DE DATOS
//------------NO DESCOMENTAR SE VACIARAN LAS TABLAS-------------
// db.sync({ force: true }).then(() => {
//   console.log("DROP AND RESYNC DB");
//   initialDB();
// });

//ROUTING
//Routing Usuarios
app.use('/api/usuarios',usuarioRouter)

const port =process.env.BD_PORT

app.listen(port,()=>{
    console.log(`Servidor operativo en el puerto ${port}`);
})
