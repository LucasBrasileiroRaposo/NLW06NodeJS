import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository";


class ListTagsService {

    async getTags(){

        const tagsRepository = getCustomRepository(TagsRepository);
        const tags = await tagsRepository.find();

        return tags;

    }

}

export { ListTagsService}