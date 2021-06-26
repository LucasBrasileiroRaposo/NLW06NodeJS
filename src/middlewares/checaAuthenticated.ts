import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export function checaAuthenticated(request: Request, response: Response, nextFunction: NextFunction){
  
    // receber o token para
    const authToken = request.headers.authorization
    
    // validar se o token esta preenchido
    if(!authToken){
        return response.status(401).end();
    }

    // validar se o token é valido (se ou expirou )
    const [,token] = authToken.split(" ");

    try{
        const {sub} = verify(token, "tokengeradoparaoadm") as IPayLoad;
        request.user_id = sub;
        return nextFunction();
    } catch (erro){

        return response.status(401).end();

    }

    // recuperar infomações do usuario 


    return nextFunction();
}

