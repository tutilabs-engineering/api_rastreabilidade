import { inject, injectable } from "tsyringe";
import { FiltersProviderDTO } from "../../dtos/FiltersProviderDTO";
import { IProviderRepository } from "../../repository/IProviderRepository";

@injectable()
class ListProviderUseCase {

    constructor(
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository
    ){}

    async execute({skip,take}: FiltersProviderDTO): Promise<Provider[]>{
        const data = await this.providerRepository.list({skip,take});

        return data
    }

}

export { ListProviderUseCase}