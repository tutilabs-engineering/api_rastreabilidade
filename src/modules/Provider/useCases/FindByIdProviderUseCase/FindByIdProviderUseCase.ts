import { inject, injectable } from "tsyringe";
import { FiltersProviderDTO } from "../../dtos/FiltersProviderDTO";
import { IProviderRepository } from "../../repository/IProviderRepository";

@injectable()
class FindByIdProviderUseCase {

    constructor(
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository
    ){}

    async execute({id ,limit ,status ,take}: FiltersProviderDTO): Promise<void>{

    }

}

export { FindByIdProviderUseCase }