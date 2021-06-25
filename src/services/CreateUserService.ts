import { UsersRepository } from "../repositories/UsersRepository";
import {getCustomRepository} from "typeorm";

interface IUserRequest{
    name: string;
    email: string;
    admin?:boolean;
}

class CreateUserService{
    
    async execute ({ name,email,admin} : IUserRequest){
        
        const usersRepository = getCustomRepository(UsersRepository);
        // checa se o email esta correto
        if(!email){

            throw new Error("Email incorrect")

        }

        const userJaExiste = await usersRepository.findOne({email});
        //checa se o usuario ja foi cadastrado, se caso ja tiver sido lança exceção
        if(userJaExiste){

            throw new Error("User already exists")

        }

        const userToBeSaved =  usersRepository.create({name,email,admin});
        await usersRepository.save(userToBeSaved);

        return userToBeSaved;
    }
}

export {CreateUserService}