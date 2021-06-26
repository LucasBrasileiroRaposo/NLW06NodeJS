import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserReceivedComplimentsService{

    async execute(user_id:string){

        const complimentsRepository = getCustomRepository(ComplimentsRepository);
        const compliments = await complimentsRepository.find({where: {user_recebedor:user_id},relations: ["userEnvio","userRecebedor","tag"]});

        return compliments;
        
    }

}

export {ListUserReceivedComplimentsService }