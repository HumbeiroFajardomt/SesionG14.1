// se pueden usar diferentes tipos de standars para pasar los paramertros, se puede pasar los datos del usuario o usar also res y req
//Al final se tiene que enviar la respuesta

import { request } from "express";

const users = [];

export function createUser(req, res){

    const userData =req.body.userData;
    if (userData==null) {
        res.status(400).json("Los datos del requerimiento no son los correctos");
        
    }
    

//forma para almacenar los parametros que se encuentran dentro del objeto 
    //DESESTRUCTURACION DE OBJETOS JSON
    const{nombre,apellido,email} = userData;
    //Se crea Registro de datos con push (arrays)

    if (nombre==null) {
        res.status(400).json("Los datos del requerimiento no son los correctos")
        return;
        
    }
    if (apellido==null) {
        res.status(400).json("Los datos del requerimiento no son los correctos")
        return;
        
    }
    if (email==null) {
        res.status(400).json("Los datos del requerimiento no son los correctos Email")
        return;
        
    }
    users.push(userData)

    
    res.status(200).json(userData)
//simpre debe haber una respuesta    
    

//data almacenada y se retorna por el Return

}

//////////************************** READ *******************************

export function readUser(req,res){
    //leer usuario atraves de un parametro

    //Se puede bucar por la url o id
    const nombre = req.params.nombre;
    

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        console.log(user);
        if (nombre == user.nombre) {
            res.status(200).json(user)
            return;
        }
        
    }
    res.sendStatus(200)
    
}