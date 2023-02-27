import { inject, injectable } from "tsyringe";
import { CreateProvider } from "../../dtos/CreateProvider";
import { IProviderRepository } from "../../repository/IProviderRepository";


@injectable()
class CreateProviderUseCase {

    constructor(
        @inject("ProviderRepository")
        private providerRepository: IProviderRepository
    ){}

    async execute({nome, externo}: CreateProvider): Promise<void>{

    }


}

export { CreateProviderUseCase }