import { inject, injectable } from "tsyringe"
import { UpdateModelDTO } from "../../dtos/UpdateModelDTO"
import { IModelRepository } from "../../repositories/IModelRepository"

@injectable()
class UpdateModelUseCase{
    constructor(
        @inject("ModelRepository")
        private modelRepository: IModelRepository){}

    async execute({id,descricao,img_path}: UpdateModelDTO){

      const model = await this.modelRepository.findById(id);
      const findByDescModel = await this.modelRepository.findByDescription(descricao);

      
      if(!model){
        throw new Error("Modelo não existe no banco de dados")
      }

      if(findByDescModel && !img_path){
        throw new Error("Descrição de modelo ja existe")
      }

      if(!img_path){img_path = model.img_path}

    await this.modelRepository.update({descricao, id, img_path})


    }

}

export { UpdateModelUseCase }