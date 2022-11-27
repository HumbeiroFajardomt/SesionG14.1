import express from "express";

const router = express.Router();
const usuarios = [];

router.get("/",(req,res)=>{

    res.json(usuarios)

});


//Peticion POST simpre le cuenrpo de la peticion va en request.body 
// y nombre,edad, correo o otro sean parte del cuerpo request.body.nombre ...
router.post("/newUsers1T",(req,res)=>{

    

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

});

export default router;