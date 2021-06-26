import {Request, Response} from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController{

    async handle(request: Request, response: Response){

        const {tag_id, user_envio, user_recebedor, mensagem} = request.body;
        const { user_id } = request;
        const createComplimentService = new CreateComplimentService();
        const compliment = await createComplimentService.execute({ tag_id, user_envio: user_id, user_recebedor, mensagem});

        return response.json(compliment);
    }
}

export { CreateComplimentController }