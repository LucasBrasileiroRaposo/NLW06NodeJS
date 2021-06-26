import {Request, Response} from "express";
import { ListTagsService} from "../services/ListTagsService";

class ListTagsController {

    async handle(request: Request, response: Response) {

        const listTagsService = new ListTagsService();
        const saida = await listTagsService.getTags();

        return response.json(saida);

    }

}

export {ListTagsController}
