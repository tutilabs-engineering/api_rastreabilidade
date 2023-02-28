import { inject, injectable } from "tsyringe";
import { CreateProviderDTO } from "../../dtos/CreateProviderDTO";
import { IProviderRepository } from "../../repository/IProviderRepository";


@injectable()
class CreateProviderUseCase {

    constructor(
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository
    ){}

    async execute({nome, externo}: CreateProviderDTO): Promise<void>{

    }


}

export { CreateProviderUseCase }