import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send({message: "Olá, Mundo!"})
})

export default app;