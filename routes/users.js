import express from "express";


//para las rutas puedan manipularse por aca

//UNA FORMA DE EXPORTAR Y TOCA EN EL IMPORT PONERLO EN { Y CON COMAS PUEDE IMPORTAR MAS }
//export const routerUser = express.Router();
const router = express.Router();

//para que funcionen las rutas es necesario implementar Routes

//direcccionado a /.users
router.get("/", function(req,res){
    res.send("Estamos en users")
});
router.get("/new", (req,res)=>{
    res.send("Esta es la new Page...!!!")
});


export default router;