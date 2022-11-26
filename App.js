import express from "express";

const app = express();
const PORT = 3000;

function callback() {
    console.log("Server is working...Continue");
}

const datosVarios = { 
    nombre: "Chapulin",
    edad: 65,
    sobrenombre: "Gomez Bolaños",
    //Array 
    "comidas Favoritas": [`
  
        arequipe,
        arepa,
        embuelto
        `
    ],
    trabajos: {
        categoria:"escultor",
        tipo: "Manual",
        horario : "Diurno"
    }
}

app.get("/",(req, res) => {
    res.json(datosVarios);
})

app.get("/inicio",(req, res) => {
    res.send("Pagina de Inicio!")
})

//recibe dos paramenetros
app.listen(3000, callback)

