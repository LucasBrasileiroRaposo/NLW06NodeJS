import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute ({email,password}:IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepository);

        // verifica existencia do email e da senha
        const userExiste = await usersRepository.findOne({email});

        if(!userExiste || !compare(password, userExiste.password)){
            throw new Error("Email/Password incorrect");
        }

        const token = sign({email: userExiste.email},"tokengeradoparaoadm",{subject: userExiste.id, expiresIn: "1d"});
    
        return token;
    }
}

export {AuthenticateUserService}