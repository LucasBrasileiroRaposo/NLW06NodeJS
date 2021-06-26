import {Request, Response} from "express";
import { ListUsersService } from "../services/ListUsersService";


class ListUsersController {

    async handle(request: Request, response: Response) {

        const usersListService = new ListUsersService();
        const users = await usersListService.getUsers();

        return response.json(users);


    }

}

export{ListUsersController}