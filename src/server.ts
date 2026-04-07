import express from "express";
import { router } from "./routes/routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(8080, () =>{
    console.log("Servidor online na porta 8080!");
})