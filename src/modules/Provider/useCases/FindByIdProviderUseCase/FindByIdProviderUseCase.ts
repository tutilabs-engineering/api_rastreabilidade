import { inject, injectable } from "tsyringe";
import { FiltersProvider } from "../../dtos/FiltersProvider";
import { IProviderRepository } from "../../repository/IProviderRepository";

@injectable()
class FindByIdProviderUseCase {

    constructor(
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository
    ){}

    async execute({id ,limit ,status ,take}: FiltersProvider): Promise<void>{

    }

}

export { FindByIdProviderUseCase }