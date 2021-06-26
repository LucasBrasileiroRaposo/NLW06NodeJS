import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserSentComplimentsService{

    async execute(user_id:string){

        const complimentsRepository = getCustomRepository(ComplimentsRepository);
        const compliments = await complimentsRepository.find({where: {user_envio:user_id},relations: ["userEnvio","userRecebedor","tag"]});

        return compliments;

    }

}

export {ListUserSentComplimentsService}