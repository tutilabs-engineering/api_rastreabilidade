import { inject, injectable } from "tsyringe";
import { FiltersModelDTO } from "../../dtos/FiltersModelDTO";
import { Model } from "../../entities/Model";
import { IModelRepository } from "../../repositories/IModelRepository";

@injectable()
class ListModelUseCase {
    constructor(
        @inject("ModelRepository")
        private modelRepository: IModelRepository){}

    async execute({skip,take}:FiltersModelDTO): Promise<Model[]> {
        
        const data = await this.modelRepository.listModel({skip,take})

        return data;
    }

}

export { ListModelUseCase }