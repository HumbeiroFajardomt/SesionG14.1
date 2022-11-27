import express from "express";
import router from "./routes/users.js";
import routerProducts from "./routes/products.js";
import routerUser1T from "./routes/user1T.js";


const app = express();
const PORT = 3000;
/*
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
app.get("/inicio/redirec",(req, res) => {
    res.redirect("/")
})




*/


//ESTA ES LA FORMA DE IMPLEMENTAR LAS DIFERENTES CONEXIONES A LAS RUTAS ya nodesde el archivo como arribe app.get
//   metodo use ,  redirige a /users y dentro estan las direcciones  gracias a router, y trae los router.get
app.use(express.json());
app.use("/users",router);
app.use("/products",routerProducts);
app.use("/user1T",routerUser1T);

//recibe dos paramenetros
app.listen(3000, () => {
    console.log("El servidor se esta ajecutandose");
})

