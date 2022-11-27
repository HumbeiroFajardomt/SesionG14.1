import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("<h1> En la seccion de Productos ....!!!</h1>")
});

router.get("/:args", (req,res)=>{
    let args = req.params.args;
    args =args.split(",");

    res.json(args);
})


export default router;