import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

interface IComplimentRequest{

    tag_id: string;
    user_envio: string;
    user_recebedor: string;
    mensagem: string;

}

class CreateComplimentService{

    async execute({tag_id, user_envio, user_recebedor, mensagem} : IComplimentRequest){

        const complimentsRepository = getCustomRepository(ComplimentsRepository);
        const usersRepository = getCustomRepository(UsersRepository);
        const userRecebedorOptional = await usersRepository.findOne(user_recebedor);

        if(user_envio === user_recebedor){

            throw new Error("Incorrect User Recebedor");

        }

        if(!userRecebedorOptional){

            throw new Error("User Recebedor does not exists!");

        }
        const compliment = complimentsRepository.create({tag_id,user_recebedor,user_envio,mensagem});
        await complimentsRepository.save(compliment);

        return compliment;
        
    }
}

export {CreateComplimentService}