import express from "express";
// de esta manera se importa la llave por defecto
import { createUser, readUser } from "../controllers/controller.js";

const router = express.Router();
const usuarios = [];

router.get("/",(req,res)=>{

    res.json(usuarios)

});

//*/*////////////////////////////////////           POST */////////////////////*******************/////////// */
//Peticion POST simpre le cuenrpo de la peticion va en request.body 
// y nombre,edad, correo o otro sean parte del cuerpo request.body.nombre ...
router.post("/newUsers1T",(req,res)=>{

    /*

    //request.body.nombre ... guardar en parametros (nombre= ...;edad= ...correo=...)


    const nombre = req.body.nombre;
    const edad =req.body.edad;
    const correo =req.body.correo;
    const id = Math.random().toString(36).slice(2);

    const usuario ={
        nombre :nombre,
        edad : edad,
        correo : correo,
        id : id
    }

    usuarios.push(usuario)
    res.json(usuario);
    */
    //Se crea req.body para almacenar los datos del objeto userData(nombre,apellido...)
    //se usa de una sola linea siendo mas rapido
    //***const userData = req.body.userData;

//llamar la function para obtener los datos ¡¡¡TIENE QUE ESTAR IMPORTADA!!!
    // crear un codigo de staus para validar si el objeto es null y obtener codigo de estado para servidor
    //***const statusCode = createUser(userData);
   // ***res.sendStatus(statusCode);

   

    //con el nuevo meetodo usando el req y res se pasan de una vex en la funcion 
    createUser(req,res)
    

});

//*/*////////////////////////////////////     READ    */////////////////////*******************/////////// */

router.get("/:nombre",(req,res)=>{
    readUser(req,res)   
})
export default router;