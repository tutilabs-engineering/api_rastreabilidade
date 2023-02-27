import { inject, injectable } from "tsyringe";
import { Model } from "../../entities/Model";
import { IModelRepository } from "../../repositories/IModelRepository";

@injectable()
class ListModelUseCase {
    constructor(
        @inject("ModelRepository")
        private modelRepository: IModelRepository){}

    async execute(): Promise<Model[]> {
        
        const data = await this.modelRepository.listModel()

        return data;
    }

}

export { ListModelUseCase }