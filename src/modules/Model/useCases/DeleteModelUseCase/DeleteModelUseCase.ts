import { inject, injectable } from "tsyringe";
import { IModelRepository } from "../../repositories/IModelRepository";

@injectable()
class DeleteModelUseCase{
    constructor(
        @inject("ModelRepository")
        private modelRepository: IModelRepository){}

     async execute(id: string): Promise<void> {

        const model = await this.modelRepository.findById(id)

        if(!model){
            throw new Error("Modelo não encontrado.")
        }

        await this.modelRepository.delete(id)

     }

}

export {DeleteModelUseCase}