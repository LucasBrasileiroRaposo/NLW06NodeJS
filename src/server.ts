import "reflect-metadata";
import "express-async-errors";
import "./database";
import express, { NextFunction, Request,Response } from "express";
import { router } from "./routes";

// @types/express
const app = express();

app.use(express.json());

app.use(router);

app.use((erro: Error, request:Request, response:Response, next:NextFunction) => {

  if(erro instanceof Error) {
    return response.status(400).json({error: erro.message,});
  }

  return response.status(500).json({status: "error",message: "Internal Server Error,"});

});

// http://localhost:3001
app.listen(3001, () => console.log("Server is running"));



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




