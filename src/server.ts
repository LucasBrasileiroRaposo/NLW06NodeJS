import "reflect-metadata";
import express from "express";

import "./database";
import { router } from "./routes";

// @types/express
const app = express();

app.use(express.json());

app.use(router);

// http://localhost:3003
app.listen(3003, () => console.log("Server is running"));



/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */


/**
 * Tipo de parametros
 * Routes Params => http://localhost:3000/produtos/00000  METODOS GET,DELETE,PATCH buscando pelo primary key
 * Query Params => http://localhost:3000/produto?name=teclado&outro buscando por atributos secundarios NAO VEM DESCRITOS NA ROTA DO METODO
 * listagem
 * 
 * Body Params =>  METODOS POST,PATCH,PUT
 *  "name": "teclado",
 *  "description": "teclado bom"
 * 
 */




