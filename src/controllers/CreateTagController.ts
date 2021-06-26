import {Request, Response} from "express";
import { CreateTagsService } from "../services/CreateTagsService";

class CreateTagController{

    async handle(request: Request, response: Response) {
        const {name} = request.body;
        const createTagservice = new CreateTagsService();
        const tag = await createTagservice.execute(name);

        response.json(tag);

    }


}

export {CreateTagController}