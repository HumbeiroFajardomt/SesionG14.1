import express from "express";

const app = express();
const PORT = 3000;

function callback() {
    console.log("Server is working...Continue");
}

app.get("/",(req, res) => {
    res.send("Hola New Day!!!")
})

app.get("/inicio",(req, res) => {
    res.send("Pagina de Inicio!")
})

//recibe dos paramenetros
app.listen(3000, callback)

