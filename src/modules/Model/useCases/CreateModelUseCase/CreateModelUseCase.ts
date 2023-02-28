import { inject, injectable } from "tsyringe";
import { CreateModelDTO } from "../../dtos/CreateModelDTO";
import { Model } from "../../entities/Model";
import { IModelRepository } from "../../repositories/IModelRepository";

@injectable()
class CreateModelUseCase {
    constructor(
        @inject("ModelRepository")
        private modelRepository: IModelRepository){}

    async execute({descricao, img_path}: CreateModelDTO): Promise<void> {
        

        if(!descricao) {
            throw new Error("Description required")
        }

        const verifyDesc = await this.modelRepository.findByDescription(descricao)

        if(verifyDesc){
            throw new Error("Description already exists")

        }
        
        if(!img_path) {
            throw new Error("Image required")
        }
    
         await this.modelRepository.create({descricao, img_path})
    
    }

}


export { CreateModelUseCase }